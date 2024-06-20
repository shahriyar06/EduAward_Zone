import SideNavbar from "../Share/SideNavbar/SideNavbar";
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="">
                <SideNavbar></SideNavbar>
            </div>
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;