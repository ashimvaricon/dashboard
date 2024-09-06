import { ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      white: string;
      purple: string;
    };
  }

  interface ThemeOptions {
    status: {
      white: React.CSSProperties["color"];
      purple: React.CSSProperties["color"];
    };
  }
}
