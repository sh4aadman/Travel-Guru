import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Main Layout/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: Home,
            }
        ],
    }
]);

export default router;