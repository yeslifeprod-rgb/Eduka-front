import { useApi } from "../../hooks/useApi";

export const fetchPublicEvents = async (skip = 0, take = 10) => {
  const api = useApi();
  try {
    const response = await api.get("/event", {
      params: {
        skip,
        take,
      },
    });
    console.log("🚀 ~ fetchPublicEvents ~ data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching public events:", error);
    throw error;
  }
};