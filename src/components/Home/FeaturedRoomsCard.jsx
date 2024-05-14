import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturedRoomsCard = ({ room }) => {
    const { _id, image, room_description, status, price_per_night } = room;
    AOS.init();
    return (
        <div>
            <div 
             data-aos-duration="1400" data-aos="zoom-in-up"
            className="shadow-lg rounded-md font-primary">
                
                    <img className="md:h-[310px] h-[225px] w-full" src={image} alt="" />
                    <div className="p-4 space-y-2">
                        <div className="flex justify-between">
                            <p className="md:text-xl text-lg font-medium font-secondary text-[#2C4549] ">Status: <span className={`text-[#f9aa4a] font-semibold ${status === 'Unavailable' && 'text-red-600'}`}>{status}</span></p>
                            <p className="md:text-xl text-lg text-[#2C4549] font-medium font-secondary "> <span className={`text-[#f9aa4a] font-semibold`}>${price_per_night}</span> Per Night</p>
                          
                        </div>
                        <p className="md:text-xl text-lg text-[#2C4549] font-medium font-secondary ">Description: <span className="md:text-base text-sm">{room_description}</span></p>
                        <div className="w-full border">
                        <Link to={`/all-rooms/${_id}`}>
                            <button className="w-full px-5 py-1 md:text-xl text-lg font-medium tracking-wider text-[#f3a648] uppercase  bg-[#2C4549] rounded hover:bg-gray-400 hover:text-white focus:outline-none ">View Details</button>
                            </Link>
                        </div>
                    </div>
             
            </div>
        </div>
    );
};

export default FeaturedRoomsCard;