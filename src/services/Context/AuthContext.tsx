import jwt from "jsonwebtoken";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Interface pour le contexte d'authentification
interface AuthContextType {
  user: { roles: string[] } | null;
  login: (accessToken: string) => void;
  logout: () => void;
}

// Création du contexte d'authentification
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Composant fournisseur du contexte d'authentification
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<{ roles: string[] } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const decodedToken: any = jwt.verify(token, "SECRET_KEY");
        setUser({ roles: decodedToken.roles });
      } catch (error) {
        console.error("Erreur lors du décodage du token :", error);
      }
    }
  }, []);

  const login = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
    try {
      const decodedToken: any = jwt.verify(accessToken, "SECRET_KEY");
      setUser({ roles: decodedToken.roles });
      navigate("/"); // Rediriger l'utilisateur après la connexion
    } catch (error) {
      console.error("Erreur lors du décodage du token :", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/"); // Rediriger l'utilisateur après la déconnexion
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
