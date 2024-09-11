import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../../services/authServices";
import { toastError, toastSuccess } from "../../../utils/Toaster";

const useAuth = () => {
  const [text, setText] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null); // Add state for error
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: (credentials: { username: string; password: string }) =>
      handleLogin(credentials.username, credentials.password),
    onSuccess: () => {
      toastSuccess("Login successful!");
      navigate("/");
    },
    onError: (err: any) => {
      // Ensure the error message is a string
      const errorMessage =
        typeof err?.response?.data?.message === "string"
          ? err.response.data.message
          : "Invalid Credentials!";
      toastError(errorMessage);
      setLoginError(errorMessage); // Set the error message in state
      console.error("Login failed:", err);
    },
  });

  const handleClick = () => {
    setText(!text);
  };

  return {
    text,
    handleClick,
    login,
    error: loginError, // Return the error from state
    isPending,
  };
};

export default useAuth;
