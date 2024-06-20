import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";


const SocialLogin = () => {
    return (
        <div>
            <div className="flex gap-6 items-center justify-center">
                <button  className="bg-transparent text-lg p-2 rounded-lg border border-[#d2093b5c]"><FcGoogle className="text-2xl" /></button>
                <button className="bg-transparent text-lg my-3 p-2 rounded-lg border border-[#d2093b5c]"><ImGithub className="text-2xl" /></button>
                <button className="bg-transparent text-lg p-2 rounded-lg border border-[#d2093b5c]"><FaFacebook className="text-2xl text-[#2563eb]" /></button>
            </div>
        </div>
    );
};

export default SocialLogin;