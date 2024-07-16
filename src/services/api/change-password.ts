import { useApi } from "../../hooks/useApi";

const api = useApi();

interface PasswordRequest {
  resetToken: string;
  newPassword: string;
}

export async function ResetPassword(body: PasswordRequest) {
  try {
    const { data } = await api.put(`user/reset-password`, body);
    console.log("API response:", data);
    return data;
  } catch (error) {
    console.error("Failed to change password:", error);
    return {
      error: error,
    };
  }
}
