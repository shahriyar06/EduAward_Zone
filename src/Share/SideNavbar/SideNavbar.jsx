import { RiMenu2Line } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import { Link } from "react-router-dom";
import useAdmin from "../../Hook/useAdmin";
import useModerator from "../../Hook/useModerator";

const SideNavbar = () => {
    const [isAdmin] = useAdmin();
    const [isModerator] = useModerator();

    const sidenavbar = <>{
        isAdmin ?
            <>
                <li><Link to='/dashboard' className="items-center"><CgProfile className="text-xl" />Admin Profile</Link></li>
                <li><Link to='/dashboard/addscholarship'>Add Scholarship</Link></li>
                <li><Link>Manage Scholarship</Link></li>
                <li><Link>Manage Applied Application</Link></li>
                <li><Link to='/dashboard/allusers'>Manage Users</Link></li>
                <li><Link>Manage Review</Link></li>
            </> :
            <>
                {
                    isModerator ?
                        <>
                            <li><Link>All Reviews</Link></li>
                        </> :
                        <>
                            <li><Link to='/dashboard' className="items-center"><CgProfile className="text-xl" />My Profile</Link></li>
                            <li><Link>My Scholarship</Link></li>
                            <li><Link>My Review</Link></li>
                        </>
                }
            </>

    }

        <div className="divider"></div>
        <li><Link to='/'><IoHome />Home</Link></li>
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
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-lg">
                    {/* Sidebar content here */}
                    {sidenavbar}
                </ul>

            </div>
        </div>
    );
};

export default SideNavbar;