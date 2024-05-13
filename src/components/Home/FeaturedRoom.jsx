import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedRoomsCard from "./FeaturedRoomsCard";


const FeaturedRoom = () => {
    const [featuredRoom, setFeaturedRoom] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/feature/${'home'}`)
            setFeaturedRoom(data);
        }
        getData()
    }, []);
    console.log(featuredRoom)
    return (
        <div className="mt-16">
            <h1 className='text-4xl font-semibold text-center font-primary'>Our Featured Rooms</h1>
            <p className=" md:text-lg text-base font-secondary  text-center pb-5 md:px-10 px-1 lg:px-20 mt-7 mb-3">
                Discover an oasis of luxury and sophistication in our Hotel Luxury. Indulge in unparalleled comfort and style as you immerse yourself in a world of premium amenities and bespoke service. Whether it's a romantic getaway or a lavish retreat  where every moment is crafted to exceed your expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                {
                    featuredRoom.map(room => <FeaturedRoomsCard key={room._id} room={room}></FeaturedRoomsCard>)
                }
            </div>

        </div>
    );
};

export default FeaturedRoom;