import { useApi } from "../../hooks/useApi";

const api = useApi();

interface EmailRequest {
  email: string;
}

export async function sendEmail(body: EmailRequest) {
  try {
    const { data } = await api.post(`user/request-password-reset`, body);
    console.log("API response:", data);
    return data;
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      error: error,
    };
  }
}