import axios from "axios";
import { useEffect, useState } from "react";
import RoomsCard from '../components/RoomsCard'
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";


const AllRoom = () => {
    const [rooms, setRooms] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-rooms?filter=${filter}`)
            setRooms(data);
            setLoading(false)
        }
        getData()
    }, [filter]);
if(loading){
    return<Loader></Loader>
}
    return (
        <div>
               <Helmet>
                <title>All Room - Hotel Luxury</title>
            </Helmet>
            <h1 className="text-center md:text-3xl text-2xl uppercase font-primary font-semibold md:mt-8 mt-5 bg-[#2C4549] text-white rounded py-3 md:py-5">Show Our All Room</h1>

            <div className="flex justify-center">
                <select
                    onChange={e => {
                        setFilter(e.target.value)

                    }}
                    value={filter}
                    name='price_range'
                    id='price_range'
                    className='md:text-2xl font-medium  rounded py-2 text-white  bg-[#2C4549] mt-3'
                >
                    <option  value=''>Filter By Price Range</option>
                    <option className="" value='$100 - $150'>Price- $100 - $150</option>
                    <option value='$150 - $200'>Price- $150 - $200</option>
                    <option value='$200 - $250'>Price- $200 - $250</option>
                </select>
            </div>
         
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    rooms.map(room => <RoomsCard key={room._id} room={room}></RoomsCard>)
                }
            </div>
        </div>
    );
};

export default AllRoom;