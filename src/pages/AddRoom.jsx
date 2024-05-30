import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const AddRoom = () => {


    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const price = form.price.value;
        const range = form.range.value;
        const size = form.size.value;
        const status = form.status.value;
        const offer = form.offer.value;
        const review = parseInt(form.review.value) ;
        const description = form.description.value;
        const roomInfo = {
            image,
            price_per_night: price,
            offer,
            review,
            room_size: size,
            room_description: description,
            price_range: range,
            status

        }
        console.log(roomInfo);
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/all-rooms`,
                roomInfo
            )
            if (data.insertedId) {

                Swal.fire({
                    title: "Successful!",
                    text: "You successfully add the room",
                    icon: "success"
                });
               
            }

        } catch (err) {

            // toast.success(err.response.data);
            const error = err.response.data;

            toast.error(error);
        }






    }


    return (
        <div className="font-primary bg-no-repeat bg-cover bg-center  border border-[#e39638] rounded">
            <section className=" bg-[#ede6d8 bg-[#faf7f2 bg-[#fbf3e5]    ">
                <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-16 p-6 rounded-md shadow-sm ">
                        <div className="space-y-4   col-span-full lg:col-span-1">

                            <p className="font-bold text-[#f3a648] text-2xl text-center font-heading1">Hotel Luxury Room's Information</p>

                            {/* <p className="text-center font-p text-lg md:text-xl">Please add your art and craft information in this form. This website is about jute and wooden handicraft. So make sure your information should be relevant. </p> */}
                        </div>


                        <div className="grid grid-cols-6 gap-6 col-span-full lg:col-span-3">



                            <div className="col-span-full">
                                <label className=" md:text-xl text-lg   font-semibold  ">Room's Image URL</label>
                                <br />
                                <input name="image" type="text" placeholder="Type here" className="input font-secondary border-[#e39638] mt-2 input-bordered w-full max-w-3xl " />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label className=" md:text-xl text-lg   font-semibold  ">Price Per Night</label>
                                <br />
                                <input min="100" max="250" name="price" type="number" placeholder="Type here" className="input font-secondary  border-[#e39638] input-bordered mt-2 w-full max-w-xs" />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label className=" md:text-xl text-lg   font-semibold  ">Price Range</label>
                                <br />
                                <select name="range" className="select font-secondary border-[#e39638] select-bordered mt-2  w-full max-w-xs">

                                    <option disabled selected>Select One</option>

                                    <option></option>
                                    <option>$100 - $150</option>
                                    <option>$150 - $200</option>
                                    <option>$200 - $250</option>


                                </select>

                            </div>





                            <div className="col-span-full sm:col-span-3">
                                <label className=" md:text-xl text-lg   font-semibold  ">Room Size</label>
                                <br />
                                <select name="size" className="select border-[#e39638] select-bordered mt-2  font-secondary w-full max-w-xs">

                                    <option disabled selected>Select One</option>

                                    <option>Small </option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    <option>Extra Large</option>



                                </select>

                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label className=" md:text-xl text-lg   font-semibold  ">Status</label>
                                <br />
                                <select name="status" className="select font-secondary border-[#e39638] select-bordered mt-2  w-full max-w-xs">

                                    <option disabled selected>Select One</option>

                                    <option></option>
                                    <option>Available</option>
                                    <option>Unavailable</option>



                                </select>

                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label className=" md:text-xl text-lg   font-semibold  ">Offer</label>
                                <br />
                                <input name="offer" type="Text" placeholder="Type here" className="input font-secondary  border-[#e39638] input-bordered mt-2 w-full max-w-xs" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label className=" md:text-xl text-lg   font-semibold  ">Review</label>
                                <br />
                                <input value={0} readOnly name="review" type="number" placeholder="Type here" className="input font-secondary  border-[#e39638] input-bordered mt-2 w-full max-w-xs" />
                            </div>


                            <div className="col-span-full">
                                <label className=" md:text-xl text-lg   font-semibold  ">Items Description</label>
                                <br />
                                <textarea placeholder="Type here" name="description" className="textarea textarea-bordered font-secondary mt-2 border-[#e39638] textarea-lg w-full max-w-3xl" ></textarea>
                            </div>


                            <div className="col-span-full">
                                <input type="submit" value="Add room " className="w-full max-w-3xl py-2 font-bold  rounded text-2xl text-[#f3a648] uppercase  bg-[#2C4549]" />
                            </div>
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default AddRoom;