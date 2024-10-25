import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import HomePage from "./pages/homepage";
import { NotFoundPage } from "./pages/404";
import ChatBot from "./pages/chatbot-interface";
import FormComponent from "./pages/form-data";

const queryClient = new QueryClient();

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/chatbot",
        element: <ChatBot />,
      },
      {
        path:"/form",
        element: <FormComponent />
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers} />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>
);
