import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../../services/authServices";
import { toastError, toastSuccess } from "../../../utils/Toaster";

const useAuth = () => {
  const [text, setText] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    mutate: login,
    error,
    isPending,
  } = useMutation({
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
    error,
    isPending,
  };
};

export default useAuth;
