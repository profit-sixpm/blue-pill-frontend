import { HomePage } from "@/pages/home/ui/home-page";
import { createBrowserRouter } from "react-router";
import { RouterProvider as BrowserRouteProvider } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export const RouterProvider = () => <BrowserRouteProvider router={router} />;
