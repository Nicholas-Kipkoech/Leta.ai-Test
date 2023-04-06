import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  username: string | null;
  userId: string | null;
}
interface ProtectedRouteProps {
  children: any;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const authState: any = useSelector<AuthState>((state) => state);
  const location = useLocation();
  if (authState.isAuthenticated === false) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
