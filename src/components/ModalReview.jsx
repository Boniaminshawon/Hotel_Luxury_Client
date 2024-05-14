import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import moment from "moment";


const ModalReview = ({booking}) => {
    // console.log(booking)
    const { user } = useAuth();
    const navigation = useNavigate();
    const presentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    const handlePost = async (e) => {
        e.preventDefault();

        // console.log(roomId)
        const form = e.target;
        // const reviewId = roomId;
        const time = form.time.value;
        const userName = name;
        const photo = user?.photoURL;
        const rating = form.rating.value;
        const comment = form.comment.value;
        const review = {  time, userName, photo, rating, comment };
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
        // console.log(review);

    }
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl text-center">Post Your Feedback</h3>

                    <form
                        onSubmit={handlePost}

                    >
                        <div className='space-y-3'>
                            <div>
                                <label className="text-lg font-semibold text-[#2e464a font-secondary">Local Time :</label>
                                <br />
                                {/* <input required value={presentTime} type="datetime-local" name="time" id="" className='border border-[#2e464a] w-1/2 px-1 text-lg py-1 font-semibold rounded' /> */}
                                <input readOnly value={presentTime} type="text" name="time" id="" className='border border-[#2e464a] w-1/2 px-1 text-lg py-1 font-semibold rounded' />

                            </div>


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
            </dialog>
        </div>
    );
};

export default ModalReview;