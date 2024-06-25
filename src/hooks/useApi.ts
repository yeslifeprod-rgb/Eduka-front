import axios, { AxiosInstance } from "axios";

export function useApi() {
  //const token = localStorage.getItem("accessToken");

  const headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": "*",
    //token
  };

  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers,
  });

  api.interceptors.request.use((config) => {
    // Aller dans le local storage pour recuperer le token
    const token = localStorage.getItem("access_token");
    //  et l'injecter dans la requete
    token ? (config.headers["Authorization"] = "Bearer " + token) : "";
    return config;
  });

  return api;
}
