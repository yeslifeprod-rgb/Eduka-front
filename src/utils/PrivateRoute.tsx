import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
}

export const isAuthenticated = () => {
  const token = sessionStorage.getItem('accessToken');
  // Check if the token exists and is valid
  return token !== null && token !== undefined;
};

export const getCurrentUser = (): User | null => {
  const userAsJson = localStorage.getItem("user");
  if (!userAsJson){
    return null;
  }
  return JSON.parse(userAsJson);
}

interface RoleBasedRouteProps {
  roles: string[];
}

export interface User {
  id?: string;
  email: string;
  status: string;
  created_at: string;
  updated_at: string;
  role: string;
}

export const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({ roles }) => {
  const user  = getCurrentUser();

  if (!user || !roles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

