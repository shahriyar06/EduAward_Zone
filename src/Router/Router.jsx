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
import ManageScholarship from "../Page/ManageScholarship/ManageScholarship";
import ManageApplication from './../Page/ManageApplication/ManageApplication';
import ManageReview from "../Page/ManageReview/ManageReview";
import ScholarshipDetails from "../Page/ScholarshipDetails/ScholarshipDetails";
import MyApplication from "../Page/MyApplication/MyApplication";
import Payment from "../Page/Payment/Payment";
import ApplyForm from "../Component/ApplyForm/ApplyForm";
import GiveReview from "../Component/GiveReview/GiveReview";
import MyReview from "../Page/MyReview/MyReview";



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
                element: <PrivateRoute><AllScholarship></AllScholarship></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/payment/:id',
                element: <Payment></Payment>
            },
            {
                path: '/scholarship/:id',
                element: <PrivateRoute><ScholarshipDetails></ScholarshipDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://eduaward-zone-server.vercel.app/scholarships/${params.id}`)
            },
            {
                path: '/applies/:id',
                element: <ApplyForm></ApplyForm>
            }
        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // Admin route
            {
                path: 'myprofile',
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
            
            // user route
            {
                path: 'myapplication',
                element: <MyApplication></MyApplication>
            },
            {
                path: 'myapplication/:id',
                element: <GiveReview></GiveReview>,
                loader: ({params}) => fetch(`https://eduaward-zone-server.vercel.app/applications/${params.id}`)
            },
            {
                path: 'myreview',
                element: <MyReview></MyReview>
            }
        ]

    }
]);

export default router;