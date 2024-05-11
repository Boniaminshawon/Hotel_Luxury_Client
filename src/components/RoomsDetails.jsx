import { useLoaderData, useNavigate } from "react-router-dom";
import Modal from "./Modal";


const RoomsDetails = () => {
    const room = useLoaderData();
    const { image, price_per_night, room_size, room_description } = room;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="flex mt-10 gap-6">
            <div className="w-[60%]">
                <img className="w-full" src={image} alt="" />
            </div>
            <div className="w-[40%] border">
                <div className="flex justify-between">
                    <p>Price:${price_per_night} per night</p>
                    <p>Room-Size: {room_size}</p>
                </div>
                <p>Description:{room_description}</p>
                <div className="flex gap-10">
                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="w-full px-5 py-2 text-lg font-medium tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded-lg lg:w-auto lg:mx-4 hover:bg-gray-400 hover:text-white focus:outline-none ">Book Now</button>
                    <button onClick={handleGoBack} className="w-full px-5 py-2 text-lg font-medium tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded-lg lg:w-auto lg:mx-4 hover:bg-gray-400 hover:text-white focus:outline-none ">
                        Go Back
                    </button>
                </div>
                <Modal></Modal>
            </div>
        </div>
    );
};

export default RoomsDetails;