import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const RoomsCard = ({ room }) => {

    const { _id, image, review, price_range, price_per_night, status, room_size } = room;
    AOS.init();
    return (
        <div >
            <div
                data-aos-duration="1400" data-aos="zoom-in-up"
                className="shadow-lg rounded-md font-primary">

                <Link to={`/all-rooms/${_id}`}>
                    <img className="md:h-[310px] h-[225px] w-full" src={image} alt="" />

                    <div className="p-4 space-y-3">
                        <div className="flex justify-between">

                        <p className="md:text-xl text-lg font-medium font-secondary text-[#2C4549] ">Status: <span className={`text-[#f9aa4a] font-semibold ${status === 'Unavailable' && 'text-red-600'}`}>{status}</span></p>
                            <p className="text-[#fdac49] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Size:</span> {room_size}</p>
                        </div>
                        <div className="flex justify-between">

                            <p className="text-[#f9aa4a] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Price Range: </span> {price_range}</p>
                            <p className="text-[#fdac49] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Review:</span> {review}</p>
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