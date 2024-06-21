import { useContext } from "react";
import { AuthContext } from "../Page/FirebaseProvider/FirebaseProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useModerator = () => {
    const {user} =useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isModerator , isPending: isModeratorLoading} = useQuery({
        queryKey: [user?.email, 'isModerator'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/moderator/${user.email}`);
            console.log(res.data)
            return res.data?.moderator;
        }
    })
    return [isModerator, isModeratorLoading]
};

export default useModerator;