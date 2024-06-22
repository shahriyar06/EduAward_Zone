import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
// import useAdmin from "../../Hook/useAdmin";
// import useModerator from "../../Hook/useModerator";


const AdminProfile = () => {
    const {user} = useContext(AuthContext);
    // const isAdmin = useAdmin();
    // const isModerator = useModerator();
    // let role = " ";
    // if (isAdmin) {
    //     role = "Admin";
    // } else if (isModerator) {
    //     role = "Moderator";
    // }
    return (
        <div>
            <Helmet>
                <title>EduAward Zone | myprofile</title>
            </Helmet>
            <div className="w-9/12 mx-auto my-10 items-center">
                <div className="text-center items-center">
                    <div className="h-80 w-80 rounded-full border-2 border-gray-500 mb-6 mx-auto"><img src={user.photoURL} alt="" className="h-72 w-72 rounded-full mx-auto mt-3" /></div>
                    <div><h1 className="text-4xl font-bold" >{user.displayName}</h1></div>
                    <div className="my-4">
                        <h1 className="text-2xl font-medium">Email :  {user.email}</h1>
                    </div>
                    <div>
                        {/* <h1 className=" text-red-700 text-xl">{role}</h1> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;