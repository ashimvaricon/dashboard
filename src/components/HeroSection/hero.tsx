import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <div>
      <Box sx={{ marginTop: "64px" }}>
        {" "}
        {/* Adjust marginTop based on AppBar height */}
        <Container>
          <Box
            sx={{
              height: "calc(100vh - 64px)", // Adjust height based on AppBar height
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: "url(/path/to/your/image.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography variant="h2">Welcome to My App</Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Hero;
