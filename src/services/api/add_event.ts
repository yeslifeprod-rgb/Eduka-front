import { useApi as UseApi } from "../../hooks/useApi";
import { EventInterface } from "../interfaces/event";

const api = UseApi();

export const createEvent = async (eventData: EventInterface) => {
  try {
    const response = await api.post(`event`, eventData, {
      headers: {
        "Content-Type": "application/json",
        // Inclure d'autres en-têtes si nécessaire, comme Authorization
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};
