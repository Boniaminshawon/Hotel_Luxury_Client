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
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
           {
                rooms.map(room=><RoomsCard key={room._id} room={room}></RoomsCard>)
            }
           </div>
        </div>
    );
};

export default AllRoom;