import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import CssBaseline from "@mui/material/CssBaseline";
import App from "./app/App.jsx";
import { ColorModeProvider } from "./theme/ThemeContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ColorModeProvider>
        <CssBaseline />

        <App />

        <Toaster position="bottom-right" richColors closeButton />
      </ColorModeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
