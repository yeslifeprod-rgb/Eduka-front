import { useApi } from "../../hooks/useApi";

const api = useApi();

interface PasswordRequest {
  userId: string;
  newPassword: string;
}

export async function ChangePassword(body: PasswordRequest) {
  try {
    const { data } = await api.post(`user/change-password`, body);
    console.log("API response:", data);
    return data;
  } catch (error) {
    console.error("Failed to change password:", error);
    return {
      error: error,
    };
  }
}