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
import ModeratorProfile from "../Page/ModeratorProfile/ModeratorProfile";
import ManageScholarship from "../Page/ManageScholarship/ManageScholarship";
import ManageApplication from './../Page/ManageApplication/ManageApplication';
import ManageReview from "../Page/ManageReview/ManageReview";



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
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // Admin route
            {
                path: 'adminprofile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: 'addscholarship',
                element: <AddScholarship></AddScholarship>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: 'managesholarship',
                element: <ManageScholarship></ManageScholarship>
            },
            {
                path: 'manageapplication',
                element: <ManageApplication></ManageApplication>
            },
            {
                path: 'managereview',
                element: <ManageReview></ManageReview>
            },
            // Moderator route
            {
                path: 'moderatorprofile',
                element: <ModeratorProfile></ModeratorProfile>
            }
        ]

    }
]);

export default router;