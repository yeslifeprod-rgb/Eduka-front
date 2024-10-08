import { AxiosError } from "axios";
import { useApi as UseApi } from "../../hooks/useApi";
import { AddEventInterface } from "../interfaces/event";

const api = UseApi();

export const createEvent = async (eventData: AddEventInterface) => {
  try {
    const response = await api.post(`event`, eventData, {
      headers: {
        "Content-Type": "application/json",
        // Inclure d'autres en-têtes si nécessaire, comme Authorization
      },
    });
    console.log("Event created successfully:", response.data);
    return response.data;
  } catch (error: unknown) {
    // Vérification si l'erreur est d'un type AxiosError
    if (error instanceof AxiosError) {
      console.error("Error creating event:", error.response?.data);
      console.error("Status code:", error.response?.status);
    } else if (error instanceof Error) {
      // Gestion des autres erreurs qui ne sont pas AxiosError
      console.error("An unexpected error occurred:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
    throw error; // Relancer l'erreur pour la gérer au niveau de l'appel
  }
};
