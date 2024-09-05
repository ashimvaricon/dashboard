import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";
import { theme } from "./theme/customTheme";
import "react-toastify/dist/ReactToastify.css";

// Lazily load the components
const Login = lazy(() => import("./pages/signin/login"));
const MainLayout = lazy(() => import("./layout/appLayout"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Products = lazy(() => import("./pages/products/products"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainLayout />}>
              <Route element={<PrivateRoute />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<Products />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default App;
