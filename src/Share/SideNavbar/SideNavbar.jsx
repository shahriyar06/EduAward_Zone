import { RiMenu2Line } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import useAdmin from "../../Hook/useAdmin";
import useModerator from "../../Hook/useModerator";
import { useContext } from "react";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";

const SideNavbar = () => {
    const [isAdmin] = useAdmin();
    const [isModerator] = useModerator();
    const { user } = useContext(AuthContext)

    const sidenavbar = <>{
        isAdmin ?
            <>
                <li><NavLink to='/dashboard/adminprofile' className={({ isActive }) => isActive ? "border-[#D2093C] border-b-4 text-[#D2093C]" : "text-[#2D8D79] text-[20px]"}><CgProfile className="text-xl" />Admin Profile</NavLink></li>
                <li><NavLink to='/dashboard/addscholarship' className={({ isActive }) => isActive ? "border-[#D2093C] border-b-4 text-[#D2093C]" : "text-[#2D8D79] text-[20px]"}>Add Scholarship</NavLink></li>
                <li><NavLink to='/dashboard/managesholarship' className={({ isActive }) => isActive ? "border-[#D2093C] border-b-4 text-[#D2093C]" : "text-[#2D8D79] text-[20px]"}>Manage Scholarship</NavLink></li>
                <li><NavLink to='/dashboard/manageapplication'className={({ isActive }) => isActive ? "border-[#D2093C] border-b-4 text-[#D2093C]" : "text-[#2D8D79] text-[20px]"}>Manage Applied Application</NavLink></li>
                <li><NavLink to='/dashboard/allusers' className={({ isActive }) => isActive ? "border-[#D2093C] border-b-4 text-[#D2093C]" : "text-[#2D8D79] text-[20px]"}>Manage Users</NavLink></li>
                <li><NavLink to='/dashboard/managereview'className={({ isActive }) => isActive ? "border-[#D2093C] border-b-4 text-[#D2093C]" : "text-[#2D8D79] text-[20px]"}>Manage Review</NavLink></li>
            </> :
            <>
                {
                    isModerator ?
                        <>
                            {/* <li><NavLink to='/dashboard/moderatorprofile'>My Profile</NavLink></li> */}
                            <li><NavLink>Manage Scholarships</NavLink></li>
                            <li><NavLink>All Reviews</NavLink></li>
                            <li><NavLink>All applied Scholarship</NavLink></li>
                            {/* <li><NavLink to='/dashboard/addscholarship'>Add Scholarship</NavLink></li> */}
                        </> :
                        <>
                            <li><NavLink to='/dashboard' className="items-center"><CgProfile className="text-xl" />My Profile</NavLink></li>
                            <li><NavLink>My Scholarship</NavLink></li>
                            <li><NavLink>My Review</NavLink></li>
                        </>
                }
            </>

    }

        <div className="divider"></div>
        <li><NavLink to='/' className={({ isActive }) => isActive ? "border-[#D2093C] border-b-4 text-[#D2093C]" : "text-[#2D8D79] text-[20px]"}><IoHome />Home</NavLink></li>
    </>
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-evenly">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="lg:hidden w-11/12 mx-auto mt-4"><RiMenu2Line className="text-xl" /></label>
                {/* <h1 className="lg:hidden">EduAward Zone</h1> */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-screen bg-base-200 text-base-content text-lg">
                    {/* Sidebar content here */}
                    <div className="text-center self-center my-7">
                        <img src={user.photoURL} className='w-44 h-44 rounded-full' alt="" />
                        <h1 className="text-3xl mt-5">{user.displayName}</h1>
                    </div>
                    <div className="">
                        {sidenavbar}
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default SideNavbar;