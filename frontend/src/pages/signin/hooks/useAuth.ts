// useLogin.ts

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../../services/authServices";

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
      toast.success("Login successful!");
      navigate("/");
    },
    onError: (err: any) => {
      toast.error("Login unsuccessful!");
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
