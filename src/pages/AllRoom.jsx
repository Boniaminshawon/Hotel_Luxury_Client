import axios from "axios";
import { useEffect, useState } from "react";
import RoomsCard from '../components/RoomsCard'
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";


const AllRoom = () => {
    const [rooms, setRooms] = useState([]);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-rooms?filter=${filter}&search=${search}`)
            setRooms(data);
            setLoading(false)
        }
        getData()
    }, [filter, search]);

    // const handleSearch = e => {
    //     e.preventDefault()
    //     const text = e.target.search.value;
    //     setSearch(text);
    //     console.log(text)
    // }
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <Helmet>
                <title>All Room - Hotel Luxury</title>
            </Helmet>
            <h1 className="text-center md:text-3xl text-2xl uppercase font-primary font-semibold md:mt-8 mt-5 bg-[#2C4549] text-white rounded py-3 md:py-5">Show Our All Room</h1>

            <div className="flex justify-center">
                <select
                    onChange={e => {
                        setFilter(e.target.value)

                    }}
                    value={filter}
                    name='price_range'
                    id='price_range'
                    className='md:text-2xl font-medium  rounded py-2 text-white  bg-[#2C4549] mt-3'
                >
                    <option value=''>Filter By Price Range</option>
                    <option className="" value='$100 - $150'>Price- $100 - $150</option>
                    <option value='$150 - $200'>Price- $150 - $200</option>
                    <option value='$200 - $250'>Price- $200 - $250</option>
                </select>
            </div>
            {/* <div className="flex justify-center mt-5">
                <form onSubmit={handleSearch}>
                    <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-3 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                            type='text'
            
                            name='search'
                            placeholder='Search By Room-Size'
                            aria-label='Enter Job Title'
                        />

                        <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider  uppercase transition-colors duration-300 transform bg-[#2C4549]  text-[#f9aa4a] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                            Search
                        </button>
                    </div>
                </form>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    rooms.map(room => <RoomsCard key={room._id} room={room}></RoomsCard>)
                }
            </div>
        </div>
    );
};

export default AllRoom;