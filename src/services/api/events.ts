import { useApi as UseApi } from "../../hooks/useApi";

export const fetchPublicEvents = async (skip = 0, take = 10) => {
  const api = UseApi();
  try {
    const response = await api.get("/event/public", {
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
export const fetchMyEvents = async (skip = 0, take = 10) => {
  const api = UseApi();
  try {
    const response = await api.get("/event/my_events", {
      params: {
        skip,
        take,
      },
    });
    console.log("🚀 ~ MyEvents ~ data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching my events:", error);
    throw error;
  }
};
export const fetchMyParticipations = async (skip = 0, take = 10) => {
  const api = UseApi();
  try {
    const response = await api.get("/event/my_participation", {
      params: {
        skip,
        take,
      },
    });
    console.log("🚀 ~ MyParticipations ~ data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching participation events:", error);
    throw error;
  }
};
export const fetchUploadImage = async (skip = 0, take = 10) => {
  const api = UseApi();
  try {
    const response = await api.get("/event/public", {
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
