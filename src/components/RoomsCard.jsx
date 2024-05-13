import { Link } from "react-router-dom";


const RoomsCard = ({ room }) => {

    const { _id, image,
        price_range, price_per_night } = room;
    return (
        <div >



            <div className="shadow-lg rounded-md font-primary">
                <Link to={`/all-rooms/${_id}`}>
                    <img className="h-[310px]" src={image} alt="" />
                    <div className="p-4 space-y-2">
                        <div className="flex justify-between">
                           
                            <p className="text-[#f9aa4a] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Price Range: </span> {price_range}</p>
                            <p className="text-[#fdac49] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Review:</span> 0</p>
                        </div>
                        <div className="w-full border">
                            <button className="w-full px-5 py-1 text-xl font-medium tracking-wider text-[#f3a648] uppercase  bg-[#2C4549] rounded hover:bg-gray-400 hover:text-white focus:outline-none ">View Details</button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default RoomsCard;