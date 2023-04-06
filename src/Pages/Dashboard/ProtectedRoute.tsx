import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: any;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  //get authState from the browserStorage to persists the logged in state
  const authState: any = localStorage.getItem("authState");
  const location = useLocation();
  //redirect to login if no authState
  if (!authState) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
