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
    headers
  });

  
  api.interceptors.request.use((config) => {
    // Aller dans le local storage pour recuperer le token
    const token = localStorage.getItem("accessToken");
    //  et l'injecter dans la requete
    token ? config.headers["Authorization"] = "Bearer " + token: '';
    return config;
  });





  // api.interceptors.response.use(
  //   // sert generalement a centraliser et gerer les erreurs
  //   // exemple parametrage de l'erreur 500 (serveur)
    
  //   // refresh token est gere ici !!!!!
  //   // tu recupere la response 
  //   (response:any) => response,

  //   async (error:any) => {
  //     if(error.response && error.response.status === 401) {
  //       // Récupérer le RefreshToken dans le localstorage
  //       const refreshToken = localStorage.getItem('refreshToken');
  //       if (refreshToken) { 
  //         // On va l'ajouter le token dans le Header
  //       }
  //     }
  //   }
  // );

  return api
}

