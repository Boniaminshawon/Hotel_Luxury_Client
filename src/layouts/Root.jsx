import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
        <div className=" border-4  border-black">
            <Navbar></Navbar>

            <Outlet></Outlet>


        </div>
    );
};

export default Root;