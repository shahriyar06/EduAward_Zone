import SideNavbar from "../Share/SideNavbar/SideNavbar";
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="flex">
            <div>
                <SideNavbar></SideNavbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;