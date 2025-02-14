import "./index.css";
import Routes from "./routes/Routes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
        <ThemeProvider>
          <RouterProvider router={Routes} />
          <ToastContainer
            position="bottom-right"
            hideProgressBar={true}
          />
        </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
