import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";




const Modal = () => {
    const room = useLoaderData();
    const navigate = useNavigate();
    const { _id, image, price_per_night, room_size, status, room_description } = room;
    const [error, setError] = useState('');

    const { user } = useAuth();
    const handleBooking = async (e) => {
        e.preventDefault();

        // if (status === 'Unavailable') {
        //     return toast.error('The room is already booking');
        // }

        const email = user?.email;
        const name = user?.displayName;
        const date = e.target.date.value;
        const roomId = _id;

        const myRoomInfo = {roomId, name, email, date, image, price_per_night, room_size, room_description };

        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/booking`,
                myRoomInfo
            )
            if (data.insertedId) {
                Swal.fire({
                    title: "Congratulation!",
                    text: "Successfully you booked this room",
                    icon: "success"
                });

                setTimeout(() => {
                    navigate('/my-bookings')

                }, 1000);

            }

        } catch (err) {

            // toast.success(err.response.data);
            const error = err.response.data;
            setError(error)
            toast.success(error);
        }
        const status = 'Unavailable';
        const { availability } = await axios.patch(
            `${import.meta.env.VITE_API_URL}/status/${_id}`, { status });
      
    }

    // const handleStatus = async (id, prevStatus, status) => {
    //     
    //     const { data } = await axios.patch(
    //         `${import.meta.env.VITE_API_URL}/status/${id}`, { status });
    //    
    // }

    return (
        <div className="">
            <Toaster position="top-left" className='z-10'></Toaster>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-[100vh h-[70vh space-y-3 rounded bg-white    ">
                    <h1 className="text-2xl underline font-bold text-black font-primary text-center ">Your Booking Information</h1>
                    <div className="flex justify-between">
                        <p className="text-[#f9aa4a] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Price: </span> ${price_per_night} Per Night</p>
                        <p className="text-[#fdac49] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Room-Size:</span> {room_size}</p>

                    </div>
                    <p className="text-xl font-medium font-secondary ">Status: <span className={`text-[#f9aa4a] font-semibold ${status === 'Unavailable' && 'text-red-600'}`}>{status}</span></p>
                    <p className="text-gray-500 text-xl font-medium font-secondary"><span className="font-semibold text-[#2e464a] text-xl underline ">Description: </span> {room_description}</p>
                    <form onSubmit={handleBooking} >
                        <div>
                            <label className="text-lg font-semibold text-[#2e464a font-secondary">Your Name :</label>
                            <br />
                            <input readOnly value={user?.displayName} id="name" type="text" placeholder="Enter Your Name" className="border w-1/2 px-1 border-[#2e464a] text-lg py-1 text-[#fdac49] font-semibold rounded  " />
                        </div>
                        <div className="my-3">
                            <label className="text-lg font-semibold text-[#2e464a font-secondary">Your Email :</label>
                            <br />
                            <input readOnly value={user?.email} id="email" type="email" placeholder="Email" className="border w-1/2 px-1 border-[#2e464a] text-lg py-1 text-[#fdac49] font-semibold rounded  " />
                        </div>
                        <div>
                            <label className="text-lg font-semibold text-[#2e464a font-secondary">Expected Date :</label>
                            <br />
                            <input required type="date" name="date" id="" className="border w-1/2 px-1 border-[#2e464a] text-lg py-1 text-[#fdac49] font-semibold rounded " />
                        </div>


                        {/* if there is a button in form, it will close the modal */}

                        {error && <p className="text-red-500 mt-2 font-medium text-2xl font-secondary"> You already booked this room</p>}

                        <input
                            disabled={status === 'Unavailabl'}
                            type="submit" value="Confirm" className="modal-action w-full px-5 py-2 text-lg font-medium tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded lg:w-auto hover:bg-gray-400 hover:text-white focus:outline-none disabled:cursor-not-allowed " />



                    </form>
                    <div className="">
                        <form method="dialog" className="modal-backdrop">
                            <button className="btn text-white bg-red-900 uppercase text-2xl font-bold">Close The PoP Up</button>
                        </form>
                    </div>


                </div>

            </dialog>
        </div>
    );
};

export default Modal;