import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>

          <div className="lg:container md:mx-1  lg:mx-auto" >
          <Outlet></Outlet>
          </div>


        </div>
    );
};

export default Root;