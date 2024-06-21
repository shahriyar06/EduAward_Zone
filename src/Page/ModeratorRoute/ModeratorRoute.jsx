import { useContext } from "react";
import useModerator from "../../Hook/useModerator";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";


const ModeratorRoute = ({children}) => {
    const [ isModerator , isModeratorLoading ] = useModerator();
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading || isModeratorLoading){
        return <span className="loading loading-spinner text-neutral flex justify-center"></span>;
    }

    if(user && isModerator){
        return children;
    }

    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
};

export default ModeratorRoute;