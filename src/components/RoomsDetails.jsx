import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Modal from "./Modal";


const RoomsDetails = () => {
    const room = useLoaderData();
    const { _id, image, price_per_night, room_size, room_description } = room;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="flex my-7 gap-6">
            <div className="w-[70%]">
                <img className="w-full rounded" src={image} alt="" />
            </div>
            <div className="w-[30%] p-4  space-y-4">
                <div className="flex justify-between">
                    <p className="text-[#f9aa4a] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Price: </span> ${price_per_night}</p>
                    <p className="text-[#fdac49] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Room-Size:</span> {room_size}</p>

                </div>

                <p className="text-gray-500 text-xl font-medium font-secondary"><span className="font-semibold text-[#2e464a] text-xl underline ">Description: </span> {room_description}</p>
                <div className="flex justify-between">
                    <Link to={`/all-rooms/${_id}`}>
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="w-full px-5 py-2 text-lg font-medium tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded lg:w-auto  hover:bg-gray-400 hover:text-white focus:outline-none ">Book Now</button>
                    </Link>
                    <button onClick={handleGoBack} className="w-full px-5 py-2 text-lg font-medium tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded lg:w-auto hover:bg-gray-400 hover:text-white focus:outline-none ">
                        Go Back
                    </button>
                </div>
                <Modal></Modal>
            </div>
        </div>
    );
};

export default RoomsDetails;