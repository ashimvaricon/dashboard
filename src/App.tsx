import { ThemeProvider } from "@mui/material";
import Login from "./pages/Signin/login";
import { theme } from "./theme/customTheme";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/appLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Suppliers from "./pages/Suppliers/suppliers";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="suppliers" element={<Suppliers />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
