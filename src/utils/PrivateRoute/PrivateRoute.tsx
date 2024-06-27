import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../../services/Context/AuthContext";

type PrivateRouteProps = RouteProps & {
  element: React.ReactNode;
  roles: string[];
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element,
  roles,
  ...rest
}) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  // Vérifie si l'utilisateur a l'un des rôles requis pour accéder à la route
  if (!roles.some((role) => user.roles.includes(role))) {
    return <Navigate to="/forbidden" />;
  }

  // Rendre la route avec l'élément fourni
  return <Route {...rest} element={element} />;
};

export default PrivateRoute;
