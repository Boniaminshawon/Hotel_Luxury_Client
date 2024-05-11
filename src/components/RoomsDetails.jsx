import { useLoaderData } from "react-router-dom";


const RoomsDetails = () => {
    const room = useLoaderData();
    const { image, price_per_night,room_size,room_description } = room;
    
    return (
        <div className="flex mt-10 gap-6">
            <div className="w-[60%]">
                <img src={image} alt="" />
            </div>
            <div className="w-[40%] border">
                <div className="flex justify-between">
                <p>Price:${price_per_night} per night</p>
                <p>Room-Size: {room_size}</p>
                </div>
                <p>Description:{room_description}</p>
            </div>
        </div>
    );
};

export default RoomsDetails;