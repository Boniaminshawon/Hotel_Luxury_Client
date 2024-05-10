import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div className="">
          <ScrollRestoration />
          <div className="h-[76px]">
          <Navbar></Navbar>
          </div>

          <div className="lg:container md:mx-1  lg:mx-auto min-h-screen" >
          <Outlet></Outlet>
          
          </div>
          <Footer></Footer>

        </div>
    );
};

export default Root;