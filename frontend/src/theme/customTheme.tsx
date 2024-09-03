import { createTheme } from "@mui/material";

export const theme = createTheme({
  status: {
    white: "#ffffff",
    purple: "#233759",
  },
  palette: {
    primary: {
      main: "#fbad33",
    },
  },
  typography: {
    h5: {
      fontFamily: "Barlow Semi Condensed,sans-serif",
      fontSize: "1.25rem",
      color: "#fff",
      fontStyle: "bold",
    },
    h6: {
      color: "#fff",
    },
  },
});
