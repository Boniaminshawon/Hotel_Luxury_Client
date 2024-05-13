import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";



const RoomsDetails = () => {
    const { user } = useAuth();


    const room = useLoaderData();
    const { _id, image, price_per_night, room_size, offer, price_range, status, room_description } = room;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    const handleModal = () => {



        if (status === 'Unavailable') {
            return Swal.fire({
                icon: "error",
                title: "Sorry...",
                text: "This room is already booking",
                footer: 'Please try another one'
            });
        }
        else {
            document.getElementById('my_modal_2').showModal();
        }
    }

    return (
        <div className="flex my-7 gap-6">
            <div className="w-[70%]">
                <img className="w-full rounded" src={image} alt="" />
            </div>
            <div className="w-[30%] p-4  space-y-4">

                <p className="text-[#f9aa4a] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Price Range: </span> {price_range}</p>
                <p className="text-xl font-medium font-secondary ">Status: <span className={`text-[#f9aa4a] font-semibold ${status === 'Unavailable' && 'text-red-600'}`}>{status}</span></p>

                <p className="text-[#f9aa4a] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Special Offer: </span> {offer}</p>

                <div className="flex justify-between">
                    <p className="text-[#f9aa4a] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Price: </span> ${price_per_night}</p>
                    <p className="text-[#fdac49] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Room-Size:</span> {room_size}</p>

                </div>

                <p className="text-gray-500 text-xl font-medium font-secondary"><span className="font-semibold text-[#2e464a] text-xl underline ">Description: </span> {room_description}</p>
                <div className="flex justify-between">
                    {!user ?
                        <Link to={'/login'}>

                            <button className="w-full px-5 py-2 text-lg font-medium tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded lg:w-auto  hover:bg-gray-400 hover:text-white focus:outline-none ">Book Now</button>

                        </Link>
                        :
                        <Link to={`/all-rooms/${_id}`}>

                            <button onClick={handleModal} className="w-full px-5 py-2 text-lg font-medium tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded lg:w-auto  hover:bg-gray-400 hover:text-white focus:outline-none ">Book Now</button>

                        </Link>
                    }

                    <button onClick={handleGoBack} className="w-full px-5 py-2 text-lg font-medium tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded lg:w-auto hover:bg-gray-400 hover:text-white focus:outline-none ">
                        Go Back
                    </button>
                </div>

            </div>
            <Modal></Modal>
        </div>
    );
};

export default RoomsDetails;