import { BlueDetailPage } from "@/pages/blue-detail/ui/blue-detail-page";
import { HomePage } from "@/pages/home/ui/home-page";
import { createBrowserRouter } from "react-router";
import { RouterProvider as BrowserRouteProvider } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/blue-detail",
    element: <BlueDetailPage />,
  },
]);

export const RouterProvider = () => <BrowserRouteProvider router={router} />;
