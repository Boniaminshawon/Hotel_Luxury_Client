import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="">
            <div className="container md:mx-1  lg:mx-auto  ">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;