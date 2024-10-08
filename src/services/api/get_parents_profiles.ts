import { useApi as UseApi } from "../../hooks/useApi";

export const fetchParentsProfiles = async (skip = 0, take = 10) => {
  const api = UseApi();
  try {
    const response = await api.get("user/profiles/parentsbyschool", {
      params: {
        skip,
        take,
      },
    });
    console.log("🚀 ~ fetchParentsProfiles ~ data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching parent profiles:", error);
    throw error;
  }
};
