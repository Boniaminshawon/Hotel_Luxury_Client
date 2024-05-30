import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageRoom = () => {
    const [rooms, setRooms] = useState([]);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-rooms`)
            setRooms(data);
            setLoading(false)
        }
        getData()
    }, []);
    const handleDeleteRoom = (id) => {
        // 
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {


                const res = await axios.delete(`${import.meta.env.VITE_API_URL}/all-rooms/${id}`);
          
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `This is room is deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    const remainingRoom = rooms.filter(room => room._id !== id);
                    setRooms(remainingRoom);
                }

            }
        });
    }
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div>

            <div className="overflow-x-auto pl-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Room Size</th>
                            <th>Price Per Night</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>View</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            rooms.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className=" w-36 h-24">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.room_size}

                                </td>
                                <td>${item.price_per_night
                                }</td>
                                <td>
                                    <Link to={`/dashboard/updateRoom/${item._id}`}>
                                        <button
                                          
                                            className="btn  bg-[#25393c] text-white"><FaEdit></FaEdit>
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteRoom(item._id)}
                                        className="btn btn-ghost  text-red-600"><FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                                <td><Link to={`/all-rooms/${item._id}`}><button className="  p-2   font-medium text-[#f3a648] bg-[#2C4549] rounded">Details</button></Link></td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageRoom;