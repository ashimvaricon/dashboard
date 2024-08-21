import { Box } from "@mui/material";
import React from "react";

const Login = () => {
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
        }}
      >
        <h5>Log in to your account</h5>
      </Box>
    </Box>
  );
};

export default Login;
