import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";




const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <div>


      <div className="navbar bg-[#2C4549 bg-[#25393c] fixed z-20 font-secondary text-[#f3a648] text-whit">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#25393c] rounded-box w-36">
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'rounded border border-white  ' : '  '}><button className=" text-lg">Home</button></NavLink></li>
            <li><NavLink to={'/all-rooms'}  className={({ isActive }) => isActive ? 'rounded border border-white  ' : ' '}><button className="text-lg">All Rooms</button></NavLink></li>
            <li><NavLink to={'/my-bookings'}  className={({ isActive }) => isActive ? 'rounded border border-white  ' : '  '}><button className="text-lg">My Bookings</button></NavLink></li>
            </ul>
          </div>
          <Link className="font-h font-bol text-5xl" to={'/'}>Hotel <span className="text-white">Luxury</span></Link>
        </div>
        <div className="navbar-center hidden text-[#f3a648] text-whit  lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'rounded border border-[#f3a648]  ' : '  '}><button className=" text-lg">Home</button></NavLink></li>
            <li><NavLink to={'/all-rooms'}  className={({ isActive }) => isActive ? 'rounded border border-[#f3a648]  ' : ' '}><button className="text-lg">All Rooms</button></NavLink></li>
            <li><NavLink to={'/my-bookings'}  className={({ isActive }) => isActive ? 'rounded border border-[#f3a648]  ' : '  '}><button className="text-lg">My Bookings</button></NavLink></li>

          </ul>
        </div>
        <div className="navbar-end ">
          {user ?

            <div className="">

              <div className="dropdown dropdown-bottom dropdown-hover dropdown-end text-black z-10">

                <div tabIndex={0} role="button" className="w-12 tooltip   tooltip-info tooltip-left z-10 " >
                  <img className="rounded-full md:h-[44px] md:w-[44px] h-[38px] w-[38px] bg-white" alt="" src={user?.photoURL || "https://i.ibb.co/L1kVMdW/images-removebg-preview.png"} />
                </div>


                <ul tabIndex={0} className="dropdown-content text-sm sm:text-lg font-semibold text-[#f3a648] bg-[#25393c] z-[1] menu  shadow rounded w-[100px] md:w-[110px]">

                  {/* <li className="">{user.displayName || 'User Name not found'} </li>
                  <hr /> */}
                  <li> <button onClick={logOut} className="sm:py-2 py-1 px-3 sm:h-[44px] rounded  bg-[#25393c] border-[#f3a648] hover:bg-[#004274]  ">Log Out</button></li>
                  <hr />
                </ul>
              </div>

            </div>
            :

            <div className="space-x-2 flex">
              <div className="hidden md:flex">
                <Link to={'/registration'} className=""> <button className=" py-1 text-sm sm:py-2 px-3 sm:h-[44px] font-semibold rounded  btn  xl:text-lg md:text-base bg-[#25393c] hover:text-black text-[#f3a648] border-[#f3a648] ext-white">Sign Up</button></Link>
              </div>
              <div>
                <Link to={'/login'}> <button className="md:py-1  py-[5px] text-sm sm:py-2 px-3 sm:h-[44px] font-semibold rounded bg-[#25393c] md:btn md:bg-[#25393c] md:text-[#f3a648] md:rounded hover:text-black xl:text-lg md:text-base           text-[#f3a648] md:border-[#f3a648] ext-white">Login</button></Link>
              </div>
            </div>
          }
        </div>
      </div>
    </div>

  );
};

export default Navbar;