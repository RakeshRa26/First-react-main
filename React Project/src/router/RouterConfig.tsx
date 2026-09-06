import { createBrowserRouter, RouterProvider } from "react-router"


import { RegistrationForm } from "../components/Auth/RegistrationForm"
import ForgetPassword from "../components/Auth/ForgetPassword"
import UserDashboard from "../pages/dashboard/UserDashboard"
import { LoginForm } from "../components/Auth/LoginForm"
import HomePage from "../pages/HomePage"
import CategoryPage from "../pages/categories/CategoryPages"
import UserPage from "../pages/dashboard/UsersPage"
import DashboardHome from "../pages/dashboard/dashboardHome"
import Product from "../pages/dashboard/Analytics"
import Analytics from "../pages/dashboard/Analytics"
import Order from "../pages/dashboard/Order"

const router = createBrowserRouter([
    {path: "/", Component: HomePage, children: [
           
            { index: true, Component: LoginForm },
            { path: "register", Component: RegistrationForm },
            { path: "forget-password", Component: ForgetPassword },
    ]},

    // { path: "/login", Component: LoginForm },
    // { path: "/register", Component: RegistrationForm },
    // { path: "/forget-password", Component: ForgetPassword },


    // this is called the child routing
    {path: "/user-dashboard", element: <UserDashboard/>, children:[
        {index: true, Component: DashboardHome},
        {path: "categories", Component: CategoryPage},
        {path: "usersPage", Component: UserPage}, 
        {path: "product", Component: Product},
        {path: "analytics", Component: Analytics},
        {path: "order", Component: Order}
    ]},


    // {path: "/", element: <HomePage/>}
])

const RouterConfig = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default RouterConfig;