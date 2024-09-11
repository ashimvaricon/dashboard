import { ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { Bounce, ToastContainer } from "react-toastify";
import AppRoutes from "./router/Routes";
import { theme } from "./theme/customTheme";
import "react-toastify/dist/ReactToastify.css";
import queryClient from "./lib/client";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </QueryClientProvider>
  );
};

export default App;
