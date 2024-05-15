
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import SingleBooking from "../components/SingleBooking";
import useAxios from "../hooks/useAxios";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";
import axios from "axios";


const MyBookings = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const [myBookings, setMyBookings] = useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        setLoading(true)
        const getData = async () => {
           
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/booking/${user?.email}`)
            setMyBookings(data)
            setLoading(false)
        }

        
        getData()
    }, [user, axiosSecure]);
if(loading){
    return<Loader></Loader>
}
    return (
        <div>
            <Helmet>
                <title>My Booking - Hotel Luxury</title>
            </Helmet>
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center bg-[#faf7f2]  md:py-5 py-3 rounded font-primary mt-3 mb-5">My Booking Rooms : {myBookings.length} </h1>
            <div className="grid space-y-6">
                {myBookings.map(booking => <SingleBooking key={booking._id} setMyBookings={setMyBookings} myBookings={myBookings} booking={booking}></SingleBooking>)}
            </div>
        </div>
    );
};

export default MyBookings;