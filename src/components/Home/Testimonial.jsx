import axios from "axios";
import { useEffect, useState } from "react";


const Testimonial = () => {
    const [review, setReview] = useState([]);
    const [sort,setSort]= useState('dsc');
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/review?sort=${sort}`)
            setReview(data);


        }
        getData();

    }, [sort]);
    // console.log(review);
    return (
        <div>

        </div>
    );
};

export default Testimonial;