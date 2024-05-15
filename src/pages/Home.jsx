import { useEffect } from "react";
import Banner from "../components/Home/Banner";
import MapSection from "../components/Home/MapSection";
import NewsLetter from "../components/Home/NewsLetter";
import Offer from "../components/Home/Offer";
import FeaturedRoom from "../components/Home/FeaturedRoom";
import { Helmet } from "react-helmet";
import Testimonial from "../components/Home/Testimonial";


const Home = () => {
    useEffect(() => {
        document.getElementById('my_modal_2').showModal()
    }, [])
    return (
        <div className="">

            <Helmet>
                <title>Home - Hotel Luxury</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedRoom></FeaturedRoom>
            <Offer></Offer>
            <MapSection></MapSection>
            <Testimonial></Testimonial>
            <NewsLetter></NewsLetter>
            <div >
                {/* Open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_2" className="modal">
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/vQwB0XL/424560690.jpg")' }} className="modal-box flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat h-[300px] md:h-[480px] lg:h-[400px] ">
                        <h1 className="uppercase md:text-4xl text-3xl text-[#ffae4c] text-center  font-bold font-primary">7% off and buffet dinner</h1>
                        <p className="mt-5 text-white md:text-2xl text-xl text-center font-secondary font-medium">Only Booking for <span className="uppercase md:text-3xl text-2xl text-green-400  font-bold font-primary">$200-$250</span> price range room</p>

                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </div>
    );
};

export default Home;