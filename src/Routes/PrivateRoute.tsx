import { ReactNode } from "react";
import { useCurrentToken } from "../Redux/Features/Auth/authSlice";
import { useAppSelector } from "../Redux/hooks";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

type TProtectedRoute = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  if (!token) {
    toast.error("You must login first");
    return <Navigate to="/login" replace={true} />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
