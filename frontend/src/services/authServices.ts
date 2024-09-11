import axios from "axios";
import {
  AUTH_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  SERVER_BASE_URL,
} from "../constants/keys";
import { setItem } from "../utils/TokensManagement";

export const handleLogin = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${SERVER_BASE_URL}/login`, {
      username,
      password,
      expiresInMins: 30,
    });
    console.log(response);
    const { token, refreshToken } = response.data;

    setItem(AUTH_TOKEN_KEY, token);
    setItem(REFRESH_TOKEN_KEY, refreshToken);

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        "Login failed: " + (error.response?.data?.message || error.message)
      );
    } else {
      throw new Error("An unexpected error occurred: " + String(error));
    }
  }
};
