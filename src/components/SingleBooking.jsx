
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Swal from "sweetalert2";

const SingleBooking = ({ booking, setMyBookings, myBookings }) => {
    const { _id, name, email, date, image, price_per_night, room_size, room_description } = booking;
    const [preDate, setPreDate] = useState(date);

    const handleUpdate = (e) => {
        e.preventDefault();
        const date = e.target.updatedDate.value;
        // const updatedDate={date}
        console.log('date is', date)
        setPreDate(date)
        fetch(`${import.meta.env.VITE_API_URL}/bookings/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({preDate })
        })
            .then(res => res.json())
            .then(data => {
                console.log('updated date',data);
                if (data.modifiedCount > 0) {
                    
                    swal("Wow!", "You updated the craft item successfully!", "success");

                }
            });


        e.target.reset();
    }


    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to cancel your booking!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
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
            }
        });
    }

    return (
        <div className="flex flex-col md:flex-row border-[#a9712b] font-p border rounded shadow-xl  gap-3 p-3 ">
            <div>
                <img className="h-full md:w-48 rounded" src={image} alt="" />
            </div>
            <div className="border border-[#b18b5e] "></div>
            <div className="space-y-2 flex-1">


                <p className="text-lg  "><span className="  font-medium mr-2">Price:</span> {price_per_night}</p>
                <p className="text-lg  "><span className="  font-medium mr-2">Stock Status:</span> {room_size}</p>

                <form onSubmit={handleUpdate}>
                    <div className='flex justify-between'>
                        <div>
                            <label className="text-lg font-semibold text-[#2e464a font-secondary">Expected Date :</label>
                            <br />
                            <input readOnly value={preDate} required type="date" name="date" id="" className="border px-1 border-[#2e464a] text-lg py-1 text-[#fdac49] font-semibold rounded " />
                        </div>
                        <div>
                            <label className="text-lg font-semibold text-[#2e464a font-secondary">Updated Date :</label>
                            <br />
                            <input required type="date" name="updatedDate" id="" className="border 2px-1 border-[#2e464a] text-lg py-1 text-black font-semibold rounded " />
                        </div>
                    </div>


                    <div className='flex justify-end'>
                        <div>
                            <input type="submit" value="Update Date" className="w-full px-5 py-1 text-xl font-medium tracking-wider text-[#f3a648] uppercase  bg-[#2C4549] rounded hover:bg-gray-400 hover:text-white focus:outline-none " />
                        </div>


                    </div>

                </form>


                <div className="flex gap-8">
                    {/* <Link to={`/booking/${_id}`}><button className="bg-green-600 py-1 px-3 text-white rounded">Update Date</button></Link> */}

                    <button onClick={() => handleDelete(_id)} className="bg-red-600   py-1 px-3 text-white rounded">Cancel Booking</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBooking;