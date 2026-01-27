import MainLayout from "../components/layout/MainLayout";
import Blog from "../pages/blog";
import Shop from "../pages/shop";
import Plant from "../pages/plant";
import Home from "../pages/home";
import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../components/product-shop/search";
import WishlistPage from "../components/product-shop/like";

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
        path: "home",
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "plant",
        element: <Plant />,
      },
      {
        path: "search",
        element: <ProductDetails />,
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
