import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])