import Cookies from "js-cookie";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: any;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  //get authState-accessToken from the browserStorage to persists the logged in state
  const authState: any = Cookies.get("accessToken");
  const location = useLocation();
  //redirect to login if no authState
  if (!authState) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
