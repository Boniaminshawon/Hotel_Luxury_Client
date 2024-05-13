import { Link } from "react-router-dom";


const FeaturedRoomsCard = ({ room }) => {
    const { _id, image, room_description, status, price_per_night } = room;
    return (
        <div>
            <div className="shadow-lg rounded-md font-primary">
                
                    <img className="h-[310px]" src={image} alt="" />
                    <div className="p-4 space-y-2">
                        <div className="flex justify-between">
                            <p className="text-xl font-medium font-secondary text-[#2C4549] ">Status: <span className={`text-[#f9aa4a] font-semibold ${status === 'Unavailable' && 'text-red-600'}`}>{status}</span></p>
                            <p className="text-xl text-[#2C4549] font-medium font-secondary "> <span className={`text-[#f9aa4a] font-semibold`}>${price_per_night}</span> Per Night</p>
                          
                        </div>
                        <p className="text-xl text-[#2C4549] font-medium font-secondary ">Description: <span className="text-base">{room_description}</span></p>
                        <div className="w-full border">
                        <Link to={`/all-rooms/${_id}`}>
                            <button className="w-full px-5 py-1 text-xl font-medium tracking-wider text-[#f3a648] uppercase  bg-[#2C4549] rounded hover:bg-gray-400 hover:text-white focus:outline-none ">View Details</button>
                            </Link>
                        </div>
                    </div>
             
            </div>
        </div>
    );
};

export default FeaturedRoomsCard;