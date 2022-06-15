import { PaletteMode } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ThemeProvider } from "./utils/theme";

const isDark = window.matchMedia("(prefers-color-scheme: dark)");
const initialColorScheme: PaletteMode = isDark ? "dark" : "light";

const root = document.getElementById("root");
createRoot(root!).render(
  <StrictMode>
    <ThemeProvider initialColorScheme={initialColorScheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
