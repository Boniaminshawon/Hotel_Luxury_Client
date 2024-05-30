
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Dashboard = () => {
    return (
        <div>
              <div className="lg:h-[76px] h-[64px] md:h-[67px]">
          <Navbar></Navbar>
          </div>
            <div  className="flex">
            <div className="min-h-screen w-[17%] bg-[#25393c] pt-5 text-[#f3a648] ">
                {/* content */}
                <ul className="menu text-2xl">
                    <li className="border-y-2"> <NavLink to={'/dashboard/addRoom'}> Add Room</NavLink>
                    </li>

                    <li  className="border-b-2"> <NavLink to={'/dashboard/manageRoom'}>  Manage Room</NavLink>
                    </li>

                

                </ul>
            </div>
            <div className="flex-1 ">
                <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Dashboard;