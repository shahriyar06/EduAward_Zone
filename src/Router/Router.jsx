import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Page/Error/Error";
import Home from './../Page/Home/Home';
import AllScholarship from "../Page/AllScholarship/AllScholarship";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/SignUp";



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
]);

export default router;