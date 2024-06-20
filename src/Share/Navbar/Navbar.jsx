import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MenuLink = () => {

    const { signout, user } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const run = location?.state || '/'

    const handlesociallogout = logoutProvider => {
        logoutProvider()
            .then(result => {
                if (result.user) {
                    toast("Success register!");
                    navigate(run)
                }
            })
    }


    const MenuLink = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? "border-[#D2093C] border-b-4 text-[#D2093C]" : "text-[#2D8D79] text-[20px]"}>Home</NavLink></li>
        <li><NavLink to='/allscholarship' className={({ isActive }) => isActive ? "border-[#D2093C] border-b-4 text-[#D2093C]" : "text-[#2D8D79] text-[20px]"}>All Scholarship</NavLink></li>
        <li><NavLink to='/dashboard' className={({ isActive }) => isActive ? "border-[#D2093C] border-b-4 text-[#D2093C]" : "text-[#2D8D79] text-[20px]"}>Dashboard</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start relative">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute z-10">
                            {MenuLink}
                        </ul>
                    </div>
                    <a className="lg:text-5xl md:text-3xl text-lg font-extrabold text-[#CEE986]">EduAward Zone</a>
                    {/* <img src="https://i.ibb.co/YRvYjqY/kajer-Khoj.png" className="w-32 md:w-full" alt="" /> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {MenuLink}
                    </ul>
                </div>
                <div className="navbar-end flex item-center">
                    <div className="ml-6">
                        {/* toggle hobe */}
                    </div>
                    {
                        user ?
                            <div className=" relative">
                                <details className="dropdown dropdown-end">
                                    <summary className="m-1 btn bg-transparent border-transparent hover:bg-transparent hover:border-transparent">
                                        <div className="w-10 rounded-full tooltip" data-tip={user.displayName}>
                                            <img className="w-10 h-10 rounded-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                        </div>
                                    </summary>
                                    <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-32  md:text-lg absolute z-10">
                                        <li className="hover:text-[#D2093C]"><Link to={'/profile'}>Profile</Link></li>
                                        <li className="hover:text-[#D2093C]" onClick={() => handlesociallogout(signout)}><Link>Sign Out</Link></li>
                                    </ul>
                                    <ToastContainer />
                                </details>

                            </div>
                            :
                            <div className="relative">
                                <Link to='/login' className="mr-3">Sign In</Link>
                                <Link to='/signup'>Sign Up</Link>
                            </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default MenuLink;