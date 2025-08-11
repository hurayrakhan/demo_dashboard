import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/HomePage";
import DashboardLayout from "../Layouts/dashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import LoginPage from "../Pages/AuthenticationPage/LoginPage";

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
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            }
        ]
    },
    {
        path: 'login',
        element: <LoginPage></LoginPage>
    }
])