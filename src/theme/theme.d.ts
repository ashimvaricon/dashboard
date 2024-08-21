import { ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}
