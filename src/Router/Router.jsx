import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";
import AllScholarship from "../Page/AllScholarship/AllScholarship";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/allscholarship',
                element: <AllScholarship></AllScholarship>
            }
        ],
    },
]);

export default router;