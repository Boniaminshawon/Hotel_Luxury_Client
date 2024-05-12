import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import swal from "sweetalert";
import toast, { Toaster } from "react-hot-toast";


const Modal = () => {
    const room = useLoaderData();
    const { image, price_per_night, room_size, room_description } = room;

    const { user } = useAuth();
    const handleBooking = async (e) => {
        e.preventDefault();
        const email = user?.email;
        const name = e.target.name.value;
        const date = e.target.date.value;
        const myRoomInfo = { name, email, date, image, price_per_night, room_size, room_description };

        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/booking`,
                myRoomInfo
            )
            if (data.insertedId) {
                toast.success("Successfully you booked this room ");

            }


        } catch (err) {
            console.log(err)
        }


    }


    return (
        <div className="">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-[100vh h-[70vh space-y-3 rounded bg-white    ">
                    <h1 className="text-2xl underline font-bold text-black font-primary text-center ">Your Booking Information</h1>
                    <div className="flex justify-between">
                        <p className="text-[#f9aa4a] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Price: </span> ${price_per_night} Per Night</p>
                        <p className="text-[#fdac49] text-xl font-medium font-secondary"><span className="font-semibold text-[#2C4549] text-xl ">Room-Size:</span> {room_size}</p>

                    </div>
                    <p className="text-gray-500 text-xl font-medium font-secondary"><span className="font-semibold text-[#2e464a] text-xl underline ">Description: </span> {room_description}</p>
                    <form onSubmit={handleBooking} >
                        <div>
                            <label className="text-lg font-semibold text-[#2e464a font-secondary">Your Name :</label>
                            <br />
                            <input required id="name" type="text" placeholder="Enter Your Name" className="border w-1/2 px-1 border-[#2e464a] text-lg py-1 text-[#fdac49] font-semibold rounded  " />
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


                        <input type="submit" value="Confirm" className="modal-action w-full px-5 py-2 text-lg font-medium tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded lg:w-auto hover:bg-gray-400 hover:text-white focus:outline-none " />


                    </form>
                    <div className="">
                        <form method="dialog" className="modal-backdrop">
                            <button className="btn text-white bg-red-900 uppercase text-2xl font-bold">Close The PoP Up</button>
                        </form>
                    </div>

                    <Toaster></Toaster>
                </div>

            </dialog>
        </div>
    );
};

export default Modal;