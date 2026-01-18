import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/home"
import Blog from "../pages/blog"
import MainLayout from "../components/layout/MainLayout"
import Shop from "../pages/shop"
import Plant from "../pages/plant"

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {
            path: "/home",
            element: <Home/>
        },
        {
            path: "/blogs",
            element: <Blog/>
        },
        {
            path: "/shop",
            element: <Shop/>
        },
        {
            path: "/plant",
            element: <Plant/>
        }
    ]
        }
    ]
)