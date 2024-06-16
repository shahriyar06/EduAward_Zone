import { Outlet } from "react-router-dom";
import Footer from "../Share/Footer/Footer";
import Navbar from './../Share/Navbar/Navbar';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;