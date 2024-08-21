import { ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
import Navbar from "./components/Navbar/navbar";
import Login from "./components/Signin/login";
import { theme } from "./theme/customTheme";
const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </div>
  );
};

export default App;
