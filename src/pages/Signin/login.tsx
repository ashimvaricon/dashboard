import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import React, { useState } from "react";
import { CustomButton, CustomTextField, WhiteCheckbox } from "./loginStyled";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { handleLogin } from "../../services/authServices";

const Login = () => {
  const [text, setText] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleClick = () => {
    setText(!text);
  };

  const handleLoginClick = async () => {
    await handleLogin(username, password);
    navigate("/");
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "98vh",
        backgroundImage: "url(/background2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#233759",
          height: "420px",
          width: "450px",
          mt: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          px: 2, // Adds padding to the sides to prevent elements from touching the edges
        }}
      >
        <Stack spacing={2.5} sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "600" }}
          >
            Login to your account
          </Typography>
          <Stack
            spacing={2.2}
            sx={{ alignItems: "flex-start", width: "100%", px: "2rem" }}
          >
            <CustomTextField
              required
              id="outlined-required"
              label="username"
              value={username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              sx={{ width: "100%", maxWidth: "400px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: "#98a5b9" }} />
                  </InputAdornment>
                ),
              }}
            />
            <CustomTextField
              required
              id="outlined-required"
              label="Password"
              type={text ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: "100%", maxWidth: "400px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsOutlinedIcon sx={{ color: "#98a5b9" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{ cursor: "pointer" }}
                    onClick={handleClick}
                  >
                    {text ? (
                      <VisibilityOffOutlinedIcon sx={{ color: "#98a5b9" }} />
                    ) : (
                      <VisibilityOutlinedIcon sx={{ color: "#98a5b9" }} />
                    )}
                  </InputAdornment>
                ),
              }}
            />

            <FormGroup>
              <FormControlLabel
                sx={{ color: "#98a5b9" }}
                control={<WhiteCheckbox defaultChecked />}
                label="Remember Me"
              />
            </FormGroup>

            <CustomButton variant="contained" onClick={handleLoginClick}>
              Log In
            </CustomButton>
            <hr
              style={{
                color: "white",
                margin: "15px 0",
                width: "88%",
                backgroundColor: "transparent",
              }}
            />
            <Typography variant="body1">
              <MuiLink
                component={RouterLink}
                to="/about"
                sx={{ textDecoration: "none", color: "#fbad33" }}
              >
                Forgot Password?
              </MuiLink>
            </Typography>
            {error && (
              <Typography variant="body2" color="error">
                {error}
              </Typography>
            )}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
