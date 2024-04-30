import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
}

export const isAuthenticated = () => {
  const token = sessionStorage.getItem('token');
  // Check if the token exists and is valid
  return token !== null && token !== undefined;
};
