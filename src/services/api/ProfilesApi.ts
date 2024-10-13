import { useApi as UseApi } from "../../hooks/useApi";

export const fetchDetailProfile = async () => {
    const api = UseApi();
    try {
        const response = await api.get("/user/profile", {
        });
        console.log("🚀 ~ My full data profile ~ data:", response.data);

        return response.data;
    } catch (error) {
        console.error("Error fetching my profile information:", error);
        throw error;
    }
};

export const updateProfile = async (id: string, profileData: any) => {
    const api = UseApi();
    try {
        const response = await api.put(`/user/profile/${id}`, profileData);
        return response.data;
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error;
    }
};