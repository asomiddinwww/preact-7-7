import MainLayout from "../components/layout/MainLayout";
import Blog from "../pages/blog";
import Shop from "../pages/shop";
import Plant from "../pages/plant";
import Home from "../pages/home";
import ProductDetail from "../components/dashboard/products/carditemsearch";
import { createBrowserRouter } from "react-router-dom";
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
        element: <ProductDetail />,
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
    ],
  },
]);
