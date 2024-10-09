import { useApi as UseApi } from "../../hooks/useApi";

export const fetchPersonalDataProfile = async () => {
  const api = UseApi();
  try {
    const response = await api.get("/user/profile", {

    });
    console.log("🚀 ~ My data profile ~ data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching my informations profile:", error);
    throw error;
  }
};