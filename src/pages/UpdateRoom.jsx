import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateRoom = () => {
    const room = useLoaderData();
    console.log(room)
    const { _id, image, price_per_night, room_size, offer, price_range, status, room_description, review } = room;
    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const price = form.price.value;
        const range = form.range.value;
        const size = form.size.value;
        const status = form.status.value;
        const offer = form.offer.value;
      
        const description = form.description.value;
        const roomInfo = {
            image,
            price_per_night: price,
            offer,
         
            room_size: size,
            room_description: description,
            price_range: range,
            status

        }
     
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/all-rooms/${_id}`, roomInfo);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Successful!",
                    text: "You successfully updated the room",
                    icon: "success"
                });
            }

        } catch (err) {
            const error = err.response.data;

            toast.error(error);
        }

    }
    return (
        <div className="font-primary bg-no-repeat bg-cover bg-center  border border-[#e39638] rounded">
            <section className=" bg-[#ede6d8 bg-[#faf7f2 bg-[#fbf3e5]    ">
                <form onSubmit={handleUpdate} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-16 p-6 rounded-md shadow-sm ">
                        <div className="space-y-4   col-span-full lg:col-span-1">

                            <p className="font-bold text-[#f3a648] text-2xl text-center font-heading1">Update the Hotel Luxury Room's Information</p>


                        </div>


                        <div className="grid grid-cols-6 gap-6 col-span-full lg:col-span-3">



                            <div className="col-span-full">
                                <label className=" md:text-xl text-lg   font-semibold  ">Room's Image URL</label>
                                <br />
                                <input defaultValue={image} name="image" type="text" placeholder="Type here" className="input font-secondary border-[#e39638] mt-2 input-bordered w-full max-w-3xl " />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label className=" md:text-xl text-lg   font-semibold  ">Price Per Night</label>
                                <br />
                                <input defaultValue={price_per_night} min="100" max="250" name="price" type="number" placeholder="Type here" className="input font-secondary  border-[#e39638] input-bordered mt-2 w-full max-w-xs" />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label className=" md:text-xl text-lg   font-semibold  ">Price Range</label>
                                <br />
                                <select defaultValue={price_range} name="range" className="select font-secondary border-[#e39638] select-bordered mt-2  w-full max-w-xs">

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
                                <select defaultValue={room_size} name="size" className="select border-[#e39638] select-bordered mt-2  font-secondary w-full max-w-xs">

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
                                <select defaultValue={status} name="status" className="select font-secondary border-[#e39638] select-bordered mt-2  w-full max-w-xs">

                                    <option disabled selected>Select One</option>

                                    <option></option>
                                    <option>Available</option>
                                    <option>Unavailable</option>



                                </select>

                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label className=" md:text-xl text-lg   font-semibold  ">Offer</label>
                                <br />
                                <input defaultValue={offer} name="offer" type="Text" placeholder="Type here" className="input font-secondary  border-[#e39638] input-bordered mt-2 w-full max-w-xs" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label className=" md:text-xl text-lg   font-semibold  ">Review</label>
                                <br />
                                <input value={review} readOnly name="review" type="number" placeholder="Type here" className="input font-secondary  border-[#e39638] input-bordered mt-2 w-full max-w-xs" />
                            </div>


                            <div className="col-span-full">
                                <label className=" md:text-xl text-lg   font-semibold  ">Items Description</label>
                                <br />
                                <textarea defaultValue={room_description} placeholder="Type here" name="description" className="textarea textarea-bordered font-secondary mt-2 border-[#e39638] textarea-lg w-full max-w-3xl" ></textarea>
                            </div>


                            <div className="col-span-full">
                                <input type="submit" value="update room " className="w-full max-w-3xl py-2 font-bold  rounded text-2xl text-[#f3a648] uppercase  bg-[#2C4549]" />
                            </div>
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default UpdateRoom;