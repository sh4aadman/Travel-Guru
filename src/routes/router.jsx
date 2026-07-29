import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../layouts/Main Layout/MainLayout";
import Home from "../pages/Home/Home";
import Booking from "../pages/Booking/Booking";
import Loading from "../components/common/Loading/Loading";

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
    ],
  },
]);

export default router;
