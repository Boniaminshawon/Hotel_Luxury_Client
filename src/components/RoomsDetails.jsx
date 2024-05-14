import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";



const RoomsDetails = () => {
    const [review, setReview] = useState([]);
    const { user } = useAuth();
    const room = useLoaderData();
    const { _id, image, price_per_night, room_size, offer, price_range, status, room_description } = room;
    const navigate = useNavigate();

    const reviewId = _id;
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/review/${reviewId}`)
            setReview(data);


        }
        getData();

    }, [reviewId]);

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
        <div className="flex flex-col md:flex-row md:my-7 my-5 gap-6">
            <Helmet>
                <title>Room Details - Hotel Luxury</title>
            </Helmet>
            <div className="lg:w-[60%] md:w-[50%] w-full">
                <img className="w-full rounded" src={image} alt="" />
            </div>
            <div className="lg:w-[40%] md:w-[50%] w-full px-4  space-y-[10px] md:space-y-4">

                <p className="text-[#f9aa4a] md:text-xl text-lg font-medium font-secondary"><span className="font-semibold text-[#2C4549] md:text-xl text-lg ">Price Range: </span> {price_range}</p>
                <p className="md:text-xl text-lg font-medium font-secondary ">Status: <span className={`text-[#f9aa4a] font-semibold ${status === 'Unavailable' && 'text-red-600'}`}>{status}</span></p>

                <p className="text-[#f9aa4a] md:text-xl text-lg font-medium font-secondary"><span className="font-semibold text-[#2C4549] md:text-xl text-lg ">Special Offer: </span> {offer}</p>

                <div className="flex justify-between">
                    <p className="text-[#f9aa4a] md:text-xl text-lg font-medium font-secondary"><span className="font-semibold text-[#2C4549] md:text-xl text-lg ">Price: </span> ${price_per_night}</p>
                    <p className="text-[#fdac49] md:text-xl text-lg font-medium font-secondary"><span className="font-semibold text-[#2C4549] md:text-xl text-lg ">Room-Size:</span> {room_size}</p>

                </div>

                <p className="text-gray-500 md:text-xl text-lg font-medium font-secondary"><span className="font-semibold text-[#2e464a] md:text-xl text-lg underline ">Description: </span> {room_description}</p>

                <div className="flex flex-col md:flex-row space-y-4   md:space-y-0 justify-between ">
                    {!user ?
                        <Link to={'/login'}>

                            <button className="w-full px-5 py-2 text-lg md:font-medium tracking-wider font-bold text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded md:w-auto  hover:bg-gray-400 hover:text-white focus:outline-none ">Book Now</button>

                        </Link>
                        :
                        <Link to={`/all-rooms/${_id}`}>

                            <button onClick={handleModal} className="w-full px-5 py-2 text-lg md:font-medium font-bold tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded lg:w-auto  hover:bg-gray-400 hover:text-white focus:outline-none ">Book Now</button>

                        </Link>
                    }

                    <button onClick={handleGoBack} className="w-full px-5 py-2 text-lg md:font-medium font-bold tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded md:w-auto hover:bg-gray-400 hover:text-white focus:outline-none ">
                        Go Back
                    </button>
                </div>
                <hr />
                {/* client review section */}
                <div>
                    <h2 className="text-center text-2xl text-black font-primary mb-3 font-semibold">Client Review</h2>
                    <div>
                        {review.map(re => (<>
                            <div className="flex  md:gap-3 md:flex-row flex-col  border-2 mb-3 border-[#f9aa4a]  py-2 pl-1 rounded">
                                <div className="flex gap-3 items-center">
                                    <img className="rounded-full md:h-[28px] md:w-[28px] h-[20px] w-[20px] bg-white" alt="" src={re.photo || "https://i.ibb.co/L1kVMdW/images-removebg-preview.png"} />
                                    <p className="font-semibold md:text-xl font-primary text-[#2e464a]">{re.userName}   : </p>
                                </div>
                                <p className="md:text-lg text-sm font-medium">{re.comment}</p>
                            </div>
                        </>

                        ))}
                    </div>
                </div>

            </div>
            <Modal></Modal>
        </div>
    );
};

export default RoomsDetails;