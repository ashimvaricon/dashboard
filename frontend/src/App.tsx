import { ThemeProvider } from "@mui/material";
import Login from "./pages/Signin/login";
import { theme } from "./theme/customTheme";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/appLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainLayout />}>
              <Route element={<PrivateRoute />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<Products />} />
              </Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
};

export default App;
