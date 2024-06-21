import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Page/Error/Error";
import Home from './../Page/Home/Home';
import AllScholarship from "../Page/AllScholarship/AllScholarship";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import AdminProfile from "../Page/AdminProfile/AdminProfile";
import PrivateRoute from "../Page/PrivateRoute/PrivateRoute";
import AddScholarship from "../Page/AddScholarship/AddScholarship";
import AllUser from './../Page/AllUser/AllUser';
import AdminRoute from "../Page/AdminRoute/AdminRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allscholarship',
                element: <AllScholarship></AllScholarship>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ],
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: '/dashboard/addscholarship',
                element: <AddScholarship></AddScholarship>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            }
        ]

    }
]);

export default router;