import ReactDOM from "react-dom/client";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AuthProvider from "./providers/AuthProvider";

import "./index.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);
