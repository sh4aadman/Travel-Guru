import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../layouts/Main Layout/MainLayout";
import Home from "../pages/Home/Home";
import Booking from "../pages/Booking/Booking";
import Loading from "../components/common/Loading/Loading";
import AuthLayout from "../layouts/Auth Layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Hotels from "../pages/Hotels/Hotels";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("/places.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/booking",
        element: <Navigate to={"/"} />,
      },
      {
        path: "/booking/:slug",
        Component: Booking,
        loader: () => fetch("/places.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/booking/:slug/hotels",
        Component: Hotels,
        loader: () => fetch("/places.json"),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth",
        element: <Navigate to={"/auth/login"} />,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
