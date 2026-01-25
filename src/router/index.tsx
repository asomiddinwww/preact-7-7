import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../components/layout/MainLayout";
import Plant from "../pages/plant";
import Shop from "../pages/shop";
import Blog from "../pages/blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/plant",
        element: <Plant />,
      },
    ],
  },
]);
