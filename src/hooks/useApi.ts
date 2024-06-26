import axios, { AxiosInstance } from "axios";

export function useApi(): AxiosInstance {
  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use(
    (config) => {
      // Aller dans le local storage pour récupérer le token
      const token = localStorage.getItem("access_token");
      // et l'injecter dans la requête si présent
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      // Gestion globale des erreurs
      if (error.response && error.response.status === 401) {
        // Par exemple, rediriger vers la page de login si 401 Unauthorized
        localStorage.removeItem("access_token");
        window.location.href = "/login"; // ou utilisez un hook de navigation si dans un composant React
      }
      return Promise.reject(error);
    }
  );

  return api;
}
