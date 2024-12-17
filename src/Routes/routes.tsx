import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Facilities from "../Pages/Facilities";
import FacilitiesDetails from "../Pages/FacilitiesDetails";
import Booking from "../Pages/Booking";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import Overview from "../Pages/Dashboard/Overview";
import ProtectedRoute from "./ProtectedRoute";
import MyBookings from "../Pages/Dashboard/MyBookings";
import FacilityManagement from "../Pages/Dashboard/FacilityManagement";
import ViewAllBookings from "../Pages/Dashboard/ViewAllBookings";
import AddNewAdmin from "../Pages/Dashboard/AddNewAdmin";
import Profile from "../Pages/Dashboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/facilities",
        element: <Facilities />,
      },
      {
        path: "/facilities/:id",
        element: <FacilitiesDetails />,
      },
      {
        path: "/book-facility/:id",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
    ],
  },

  // Dashboard Routes

  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
      <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <ProtectedRoute role="user">
            <MyBookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "/facility-management",
        element: (
          <ProtectedRoute role="admin">
            <FacilityManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "/all-bookings",
        element: (
          <ProtectedRoute role="admin">
            <ViewAllBookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-new-admin",
        element: (
          <ProtectedRoute role="admin">
            <AddNewAdmin />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
