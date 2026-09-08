import { createBrowserRouter, RouterProvider } from "react-router"


import { RegistrationForm } from "../components/Auth/RegistrationForm"
import ForgetPassword from "../components/Auth/ForgetPassword"
import UserDashboard from "../pages/dashboard/UserDashboard"
import { LoginForm } from "../components/Auth/LoginForm"
import HomePage from "../pages/HomePage"
import CategoryPage from "../pages/dashboard/categories/CategoryPages"
import UserPage from "../pages/dashboard/User/UsersPage"
import DashboardHome from "../pages/dashboard/dashboardHome"
import Product from "../pages/dashboard/product/Product"
import Analytics from "../pages/dashboard/analytic/Analytics"
import Order from "../pages/dashboard/order/Order"
import NotFound from "../pages/error/NotFound"
import { NotFoundComponent } from "../components/ui/errors/NotFound"
import CategoryCreate from "../pages/dashboard/categories/Category-create"

const router = createBrowserRouter([
    {path: "/", Component: HomePage, children: [
           
            { index: true, Component: LoginForm },
            { path: "register", Component: RegistrationForm },
            { path: "forget-password", Component: ForgetPassword },
            {path: "*", Component: NotFoundComponent}
    ]},

    // { path: "/login", Component: LoginForm },
    // { path: "/register", Component: RegistrationForm },
    // { path: "/forget-password", Component: ForgetPassword },


    // this is called the child routing
    {path: "/user-dashboard", element: <UserDashboard/>, children:[
        {index: true, Component: DashboardHome},
        {path: "categories", Component: CategoryPage},
        {path: "category-create", Component: CategoryCreate},
        {path: "usersPage", Component: UserPage}, 
        {path: "products", Component: Product},
        {path: "analytics", Component: Analytics},
        {path: "order", Component: Order},


        // Not found 404 Error
        {path: "*", Component: NotFound}
    ]},


    // {path: "/", element: <HomePage/>}
])

const RouterConfig = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default RouterConfig;