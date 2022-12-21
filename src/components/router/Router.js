import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import UserDetail from "../pages/UserDetail";
import Root from "../root/Root";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            }
        ]
    }
])