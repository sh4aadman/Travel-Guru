import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../layouts/Main Layout/MainLayout";
import Home from "../pages/Home/Home";
import Place from "../pages/Places/Place";
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
        path: "/places",
        element: <Navigate to={"/places/coxs-bazar"} />,
      },
      {
        path: "/places/:slug",
        Component: Place,
      },
    ],
  },
]);

export default router;
