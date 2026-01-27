import MainLayout from "../components/layout/MainLayout";
import Blog from "../pages/blog";
import Shop from "../pages/shop";
import Plant from "../pages/plant";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "blogs", element: <Blog /> },
      { path: "shop", element: <Shop /> },
      { path: "plant", element: <Plant /> },
    ],
  },
]);
