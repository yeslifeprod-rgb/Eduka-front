import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../services/Context/UserContext";

const PrivateRoute: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

interface RoleBasedRouteProps {
  roles: string[];
}

export const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({ roles }) => {
  const { user } = useUser();
  if (!user || !roles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
