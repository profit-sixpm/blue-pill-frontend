import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { RouterProvider } from "@/app/routes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { enableMocking } from "@/app/mocks";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider />
        <Toaster position="top-center" richColors />
      </QueryClientProvider>
    </StrictMode>
  );
});
