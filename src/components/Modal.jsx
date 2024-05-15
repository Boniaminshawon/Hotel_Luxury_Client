import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const Modal = () => {
    const room = useLoaderData();
    const navigate = useNavigate();
    const { _id, image, price_per_night, room_size, status, room_description } = room;
    const [error, setError] = useState('');
    const [startDate, setStartDate] = useState();

    const { user } = useAuth();
    const handleBooking = async (e) => {
        e.preventDefault();




        const thisMonths = new Date().getMonth();
        const deadLineMonth = new Date(startDate).getMonth();
        // const previousMonth = new Date(startDate).getMonth() - 1;

        const today = new Date().getDate();
        const deadLine = new Date(startDate).getDate();
        console.log('this month:',thisMonths,'deadLineMonth:',deadLineMonth)
    
        if (today > deadLine && thisMonths === deadLineMonth) {
            console.log('first')
            navigate('/all-rooms')
            return (

                Swal.fire({
                    icon: "error",
                    title: "Sorry...",
                    text: "You have to select the next days! Dont select the previous days",
       
                })
            )
        }
        if ( thisMonths > deadLineMonth) {
            console.log('middle')
            navigate('/all-rooms')
            return (

                Swal.fire({
                    icon: "error",
                    title: "Sorry...",
                    text: "You have to select the next days! Dont select the previous days",
                
                })
            )
        }
        if (today > deadLine && thisMonths> deadLineMonth ) {
            console.log('last')
            navigate('/all-rooms')
            return (

                Swal.fire({
                    icon: "error",
                    title: "Sorry...",
                    text: "You have to select the next days! Dont select the previous days",
                    
                })
            )
        }




        const email = user?.email;
        const name = user?.displayName;
        const date = startDate;
        // const date = e.target.date.value;
        const roomId = _id;

        const myRoomInfo = { roomId, name, email, date, image, price_per_night, room_size, room_description };

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
                <div className="modal-box  space-y-2 md:space-y-3 rounded bg-white    ">
                    <h1 className="md:text-2xl text-xl  underline font-bold text-black font-primary text-center ">Your Booking Information</h1>
                    <div className="flex justify-between md:flex-row flex-col gap-2">
                        <p className="text-[#f9aa4a] md:text-xl  font-medium font-secondary"><span className="font-semibold text-[#2C4549] md:text-xl  ">Price: </span> ${price_per_night} Per Night</p>
                        <p className="text-[#fdac49] md:text-xl  font-medium font-secondary"><span className="font-semibold text-[#2C4549] md:text-xl  ">Room-Size:</span> {room_size}</p>

                    </div>
                    <p className="md:text-xl  font-medium font-secondary ">Status: <span className={`text-[#f9aa4a] font-semibold ${status === 'Unavailable' && 'text-red-600'}`}>{status}</span></p>
                    <p className="text-gray-500 md:text-xl  font-medium font-secondary"><span className="font-semibold text-[#2e464a] md:text-xl  underline ">Description: </span> {room_description}</p>
                    <form onSubmit={handleBooking} >
                        <div>
                            <label className="md:text-lg font-semibold text-[#2e464a font-secondary">Your Name :</label>
                            <br />
                            <input readOnly value={user?.displayName} id="name" type="text" placeholder="Enter Your Name" className="border w-full md:w-1/2 px-1 border-[#2e464a] md:text-lg py-1 text-[#fdac49] font-semibold rounded  " />
                        </div>
                        <div className="my-3">
                            <label className="md:text-lg font-semibold text-[#2e464a font-secondary">Your Email :</label>
                            <br />
                            <input readOnly value={user?.email} id="email" type="email" placeholder="Email" className="border w-full md:w-1/2 px-1 border-[#2e464a] md:text-lg py-1 text-[#fdac49] font-semibold rounded  " />
                        </div>
                        <div>
                            <label className="md:text-lg font-semibold text-[#2e464a font-secondary">Expected Date :</label>
                            <br />
                            <DatePicker
                                className='border p-2 rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                            {/* <input required type="date" name="date" id="" className="border w-full md:w-1/2 px-1 border-[#2e464a] text-lg py-1 text-[#fdac49] font-semibold rounded " /> */}
                        </div>


                        {/* if there is a button in form, it will close the modal */}

                        {error && <p className="text-red-500 mt-2 font-medium text-2xl font-secondary"> You already booked this room</p>}

                        <input
                            disabled={status === 'Unavailabl'}
                            type="submit" value="Confirm" className="modal-action w-full px-5 py-2 text-lg lg:font-medium font-bold text-[#f3a648] uppercase   bg-[#2C4549] rounded lg:w-auto hover:bg-gray-400 hover:text-white focus:outline-none disabled:cursor-not-allowed " />



                    </form>
                    <div className="">
                        <form method="dialog" className="modal-backdrop">
                            <button className="btn text-white bg-red-900 uppercase text-xl md:text-2xl font-bold">Close The PoP Up</button>
                        </form>
                    </div>


                </div>

            </dialog>
        </div>
    );
};

export default Modal;