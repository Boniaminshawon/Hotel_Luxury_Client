
import axios from 'axios';
import moment from 'moment';
import { useState } from 'react';
import swal from 'sweetalert';
import Swal from "sweetalert2";
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SingleBooking = ({ booking, setMyBookings, myBookings }) => {
    const { user } = useAuth();
    const { _id, roomId, name, email, date, image, price_per_night, room_size, } = booking;
    const [preDate, setPreDate] = useState(date);
    const navigation = useNavigate();
    // const presentTime = moment().format('MMMM Do YYYY, h:mm a');
    // const [startDate, setStartDate] = useState(new Date());
    const [updateDate, setUPdateDate] = useState();

    // console.log(new Date(startDate).toLocaleDateString())
    // const previousDate = moment(preDate).format('llll');
    // console.log(moment(presentTime).format('llll'))



    const handleUpdate = (e) => {
        e.preventDefault();
       
        const date = updateDate;

        const thisMonths = new Date().getMonth();
        const updatedMonth = new Date(date).getMonth();
        

        const today = new Date().getDate();
        const deadLine = new Date(date).getDate();
        console.log('this month:', thisMonths, 'updatedMonth:', updatedMonth)
        if (today > deadLine && thisMonths === updatedMonth) {
            console.log('first')
           
            return (

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                })
            )
        }
        if (thisMonths > updatedMonth) {
            console.log('middle')
           
            return (

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                })
            )
        }
        if (today > deadLine && thisMonths > updatedMonth) {
            console.log('last')
           
            return (

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                })
            )
        }

        

        // setPreDate(date)
        fetch(`${import.meta.env.VITE_API_URL}/bookings/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            // body: JSON.stringify({ preDate })
            body: JSON.stringify({ date })
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {

                    swal("Wow!", "You updated the craft item successfully!", "success");
                    setPreDate(date)

                }

            });


        e.target.reset();
    }


    const handleDelete = (id) => {

        // month
        const thisMonths = new Date().getMonth();
        const deadLineMonth = new Date(preDate).getMonth();
        console.log(thisMonths, deadLineMonth)


        // day
        const today = new Date().getDate();
        const tomorrow = new Date().getDate() + 1;
        const deadLine = new Date(preDate).getDate();

        console.log('tomorrow', tomorrow)
        console.log('today', today)
        console.log('deadline', deadLine)




        if (today > deadLine && thisMonths === deadLineMonth) {

            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }





        // tomorrow
        if (tomorrow === deadLine) {

            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        // today
        if (today === deadLine) {

            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        // month
        if (thisMonths > deadLineMonth) {
            console.log('mas ta boro')

            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to cancel your booking!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"

        }).then(async (result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your booking has been canceled.",
                                icon: "success"

                            })
                            const remainingBooking = myBookings.filter(myBooking => myBooking._id !== id);
                            setMyBookings(remainingBooking);
                        }
                    })

                const status = 'Available';
                const { availability } = await axios.patch(
                    `${import.meta.env.VITE_API_URL}/status/${roomId}`, { status });

            }
        });
    }


    const handleGiveReview = async (e) => {


        e.preventDefault();
        const form = e.target;
        const reviewId = roomId;
        const time = form.time.value;
        const userName = name;
        const photo = user?.photoURL;
        const rating = form.rating.value;
        const comment = form.comment.value;
        const review = { reviewId, time, userName, photo, rating, comment };
        console.log(time)
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/review`,
                review
            )
            if (data.insertedId) {

                Swal.fire({
                    title: "Successful!",
                    text: "You successfully post your reviews",
                    icon: "success"
                });
                setTimeout(() => {
                    navigation('/my-bookings')

                }, 1000);
            }

        } catch (err) {

            // toast.success(err.response.data);
            const error = err.response.data;

            toast.error(error);
        }

        e.target.reset();

    }

    return (
        <div className="flex flex-col lg:flex-row border-[#a9712b] font-p border rounded shadow-xl  gap-5 p-3 ">

            <div>
                <img className="lg:h-full w-full h-[225px] md:h-[350px] lg:w-[340px] rounded" src={image} alt="" />
            </div>

            <div className="md:space-y-4 space-y-2 flex-1  ">



                <div className='flex justify-between gap-2 md:flex-row flex-col'>
                    <p className="text-[#f9aa4a] text-lg md:text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-lg md:text-xl ">Price: </span> ${price_per_night} Per Night</p>
                    <p className="text-[#fdac49] text-lg md:text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-lg md:text-xl ">Room-Size:</span> {room_size}</p>
                </div>



                <form onSubmit={handleUpdate}>
                    <div className=' '>
                        <div className=' flex justify-between'>

                            <div className=' '>
                                <label className="md:text-lg font-semibold text-[#2e464a font-secondary">Expected Date :</label>
                                <br />
                                <span className='border  px-2 border-[#2e464a] md:text-lg py-1 text-[#fdac49] font-semibold rounded '> {new Date(preDate).toLocaleDateString()}</span>
                                {/* <input readOnly value={preDate} required type="date" name="date" id="" className="border px-2 border-[#2e464a] md:text-lg py-1 text-[#fdac49] font-semibold rounded " /> */}
                            </div>
                            <div className=''>
                                <label className="md:text-lg font-semibold text-[#2e464a font-secondary">Updated Date :</label>
                                <br />
                                <DatePicker
                                    className='border md:w-3/5  px-1 border-[#2e464a] md:text-lg py-[3px] text-black font-semibold rounded '
                                    selected={updateDate}
                                    onChange={date => setUPdateDate(date)}
                                />
                                {/* <input required type="date" name="updatedDate" id="" className="border 2px-1 border-[#2e464a] md:text-lg py-1 text-black font-semibold rounded " /> */}
                            </div>
                        </div>


                        <div className='my-5'>
                            <input type="submit" value="Update Date" className=" px-5 py-2 md:text-xl text-lg  font-bold md:font-medium tracking-wider text-[#f3a648] uppercase  bg-[#2C4549] rounded hover:bg-gray-400 hover:text-white focus:outline-none " />
                        </div>

                    </div>
                </form>



                <div className=" ">

                    <div>
                        <button onClick={() => handleDelete(_id)} className="bg-red-600   py-2 px-4 md:px-3 text-white md:text-lg  font-bold md:font-medium  font-secondar uppercase rounded">Cancel Booking</button>
                    </div>
                </div>


                {/* review field */}
                {/* <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-2xl text-center">Post Your Feedback</h3>

                        <form onSubmit={handleReview} >
                            <div className='space-y-3'>
                                <div>
                                    <label className="text-lg font-semibold text-[#2e464a font-secondary">Local Time :</label>
                                    <br />
                                 
                                    <input readOnly value={presentTime} type="text" name="time" id="" className='border border-[#2e464a] w-1/2 px-1 text-lg py-1 font-semibold rounded' />

                                </div>
                                <input value={roomId} type="text" name="" id="" />

                                <div>
                                    <label className="text-lg font-semibold text-[#2e464a font-secondary">Your Name :</label>
                                    <br />
                                    <input readOnly value={name} id="name" name='name' type="text" placeholder="Enter Your Name" className="border w-1/2 px-1 border-[#2e464a] text-lg py-1 text-[#fdac49] font-semibold rounded  " />
                                </div>
                                <div>
                                    <label className="text-lg font-semibold text-[#2e464a font-secondary">Rating :</label>
                                    <br />
                                    <input name='rating' required min="1" max="5" id="name" type="number" placeholder="Enter Your Rating" className="border  w-1/2 px-1 border-[#2e464a] text-lg py-1 text-[#fdac49] font-semibold rounded  " />
                                </div>

                                <div>
                                    <label className="text-lg font-semibold text-[#2e464a font-secondary">Comment :</label>
                                    <br />

                                    <textarea name='comment' required placeholder="Type Your Comment" className="textarea textarea-bordered text-lg border-[#2e464a] textarea-md w-1/2" ></textarea>
                                </div>
                                <input type="submit" value="Post" className='modal-action w-full px-5 py-2 text-lg font-medium tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded lg:w-auto hover:bg-gray-400 hover:text-white focus:outline-none ' />
                            </div>
                        </form>


                        <div className="mt-5">
                            <form method="dialog" className="modal-backdrop">
                                <button className="btn text-white bg-red-900 uppercase text-2xl font-bold">Close The PoP Up</button>
                            </form>
                        </div>
                    </div>
                </dialog> */}
            </div>
            <div className="border border-[#b18b5e] "></div>

            <div className='flex-1 '>
                <h1 className="font-bold md:text-3xl text-2xl font-primary text-center">Post Your Review</h1>
                <form onSubmit={handleGiveReview}>
                    <div className='space-y-3'>
                        <div>
                            <label className="md:text-lg font-semibold text-[#2e464a font-secondary">Local Time :</label>
                            <br />
                            <input type="datetime-local" name="time" id="" />
                            {/* <input readOnly value={presentTime} type="text" name="time" id="" className='border border-[#2e464a] md:w-1/2 px-1 md:text-lg py-1 font-semibold rounded' /> */}

                        </div>


                        <div className='flex justify-between gap-3 md:flex-row flex-col'>
                            <div className='flex-1'>
                                <label className="md:text-lg font-semibold text-[#2e464a font-secondary">Your Name :</label>
                                <br />
                                <input readOnly value={name} id="name" name='name' type="text" placeholder="Enter Your Name" className="border  px-1 border-[#2e464a] md:text-lg py-1 text-[#fdac49] font-semibold rounded  " />
                            </div>
                            <div className='flex-1'>
                                <label className="md:text-lg font-semibold text-[#2e464a font-secondary">Rating :</label>
                                <br />
                                <input name='rating' required min="1" max="5" id="name" type="number" placeholder="Enter Your Rating" className="border  px-1 border-[#2e464a] md:text-lg py-1 md:w-full text-[#fdac49] font-semibold rounded  " />
                            </div>
                        </div>

                        <div>
                            <label className="md:text-lg font-semibold text-[#2e464a font-secondary">Comment :</label>
                            <br />

                            <textarea name='comment' required placeholder="Type Your Comment" className="textarea textarea-bordered md:text-lg border-[#2e464a] textarea-xs w-full" ></textarea>
                        </div>
                        <input type="submit" value="Post" className='modal-action w-full px-5 md:py-1 py-2 md:text-lg md:font-medium font-bold tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded lg:w-auto hover:bg-gray-400 hover:text-white focus:outline-none ' />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SingleBooking;