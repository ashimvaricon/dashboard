import { FormGroup, Stack, Typography, Link as MuiLink } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";
import {
  BoxBelowStyled,
  BoxTopStyled,
  CustomButton,
  CustomTextFieldStyled,
  DividerStyled,
  EmailIconStyled,
  FirstStackStyled,
  FormControlLabelStyled,
  HttpsOutlinedIconStyled,
  StyledVisibilityOffIcon,
  StyledVisibilityOnIcon,
  TypographyStyled,
  WhiteCheckbox,
} from "./loginStyled";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../services/authServices";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const [text, setText] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const {
    mutate: login,
    error,
    isPending,
  } = useMutation({
    mutationFn: () => handleLogin(username, password),
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

  const handleLoginClick = async () => {
    login();
  };

  return (
    <BoxTopStyled>
      <BoxBelowStyled>
        <FirstStackStyled spacing={2.5}>
          <TypographyStyled variant="h5">
            Login to your account
          </TypographyStyled>
          <Stack
            sx={{ alignItems: "flex-start", width: "100%", px: "2rem" }}
            spacing={2.2}
          >
            <CustomTextFieldStyled
              required
              id="outlined-required"
              label="username"
              value={username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIconStyled />
                  </InputAdornment>
                ),
              }}
            />
            <CustomTextFieldStyled
              required
              id="outlined-required"
              label="Password"
              type={text ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsOutlinedIconStyled />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{ cursor: "pointer" }}
                    onClick={handleClick}
                  >
                    {text ? (
                      <StyledVisibilityOffIcon />
                    ) : (
                      <StyledVisibilityOnIcon />
                    )}
                  </InputAdornment>
                ),
              }}
            />

            <FormGroup>
              <FormControlLabelStyled
                control={<WhiteCheckbox defaultChecked />}
                label="Remember Me"
              />
            </FormGroup>

            <CustomButton variant="contained" onClick={handleLoginClick}>
              {isPending ? "Logging In..." : "Log in"}
            </CustomButton>
            <DividerStyled />

            {error && (
              <Typography variant="body2" color="error">
                {error}
              </Typography>
            )}
          </Stack>
        </FirstStackStyled>
      </BoxBelowStyled>
    </BoxTopStyled>
  );
};

export default Login;
