import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googlelogin, githublogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const run = location?.state || '/'

    const handlesociallogin = (socialProvider) =>{
        socialProvider()
        .then(result => {
            if(result.user){
                navigate(run)
            }
        })
        .catch(() => {
        });
    }

    return (
        <div>
            <div className="flex gap-6 items-center justify-center">
                <button onClick={() => handlesociallogin(googlelogin)} className="bg-transparent text-lg border border-[#d2093b5c] p-3 rounded-lg"><FcGoogle className="text-2xl" /></button>
                <button onClick={() => handlesociallogin(githublogin)} className="bg-transparent text-lg my-3 border border-[#d2093b5c] p-3 rounded-lg"><ImGithub className="text-2xl" /></button>
                <button className="bg-transparent text-lg border border-[#d2093b5c] p-3 rounded-lg"><FaFacebook className="text-2xl text-[#2563eb]" /></button>
            </div>
        </div>
    );
};

export default SocialLogin;