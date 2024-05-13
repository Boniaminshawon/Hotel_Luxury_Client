import axios from "axios";
import { useEffect, useState } from "react";
import RoomsCard from '../components/RoomsCard'
import { IoMdArrowDropdown } from "react-icons/io";

const AllRoom = () => {
    const [rooms, setRooms] = useState([]);
    const [filter, setFilter] = useState('');
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-rooms?filter=${filter}`)
            setRooms(data)
        }
        getData()
    }, [filter]);
// ?filter=${filter}
    return (
        <div>
            <h1 className="text-center md:text-3xl text-2xl uppercase font-primary font-semibold md:mt-8 mt-5 bg-[#2C4549] text-white rounded py-3 md:py-5">Show Our All Room</h1>

            <div className="flex justify-center">
                <select
                    onChange={e => {
                        setFilter(e.target.value)

                    }}
                    value={filter}
                    name='price_range'
                    id='price_range'
                    className='text-2xl font-medium font-p rounded py-2 text-white  bg-[#2C4549] mt-3'
                >
                    <option  value=''>Filter By Price Range</option>
                    <option className="" value='$100 - $150'>Price- $100 - $150</option>
                    <option value='$150 - $200'>Price- $150 - $200</option>
                    <option value='$200 - $250'>Price- $200 - $250</option>
                </select>
            </div>
            {/* <div className="dropdown dropdown-bottom dropdown-hover text-center  flex justify-center">
                <div tabIndex={0} role="button" className="btn z-[1] m-1 text-2xl font-medium font-p text-white hover:bg-[#2C4549] bg-[#2C4549]">Filter By Price <span><IoMdArrowDropdown></IoMdArrowDropdown></span></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 font-medium text-lg">

                    <li className="border-b border-[#2C4549]"><a>Price- $100 - $150</a></li>
                    <li className="border-b border-[#2C4549]"><a>Price- $150 - $200</a></li>
                    <li className=""><a>Price- $200 - $250</a></li>


                </ul>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                {
                    rooms.map(room => <RoomsCard key={room._id} room={room}></RoomsCard>)
                }
            </div>
        </div>
    );
};

export default AllRoom;