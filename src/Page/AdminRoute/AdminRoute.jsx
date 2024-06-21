import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import useAdmin from "../../Hook/useAdmin";


const AdminRoute = ({children}) => {

    const [ isAdmin , isAdminLoading ] = useAdmin();
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading || isAdminLoading){
        return <span className="loading loading-spinner text-neutral flex justify-center"></span>;
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
};

export default AdminRoute;