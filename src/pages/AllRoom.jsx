import axios from "axios";
import { useEffect, useState } from "react";
import RoomsCard from '../components/RoomsCard'

const AllRoom = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-rooms`)
            setRooms(data)
        }
        getData()
    }, []);

    return (
        <div>
            <h1 className="text-center md:text-3xl text-2xl uppercase font-primary font-semibold md:my-8 my-5 bg-[#2C4549] text-white rounded py-3 md:py-5">Show Our All Room</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                {
                    rooms.map(room => <RoomsCard key={room._id} room={room}></RoomsCard>)
                }
            </div>
        </div>
    );
};

export default AllRoom;