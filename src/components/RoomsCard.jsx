import { Link } from "react-router-dom";


const RoomsCard = ({ room }) => {
    
    const { _id,image, price_per_night } = room;
    return (
        <div>
            <Link to={`/all-rooms/${_id}`}>
                <img className="h-[310px]" src={image} alt="" />

            </Link>
        </div>
    );
};

export default RoomsCard;