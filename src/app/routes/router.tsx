import { BlueDetailPage } from "@/pages/blue-detail/ui/blue-detail-page";
import { HomePage } from "@/pages/home/ui/home-page";
import { LoginPage } from "@/pages/login/ui/login-page";
import { SignupPage } from "@/pages/login/ui/sign-page";
import { UserInitPage } from "@/pages/user-init/ui/user-init.page";
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
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignupPage />,
  },
  {
    path: "/user-init",
    element: <UserInitPage />,
  },
]);

export const RouterProvider = () => <BrowserRouteProvider router={router} />;
