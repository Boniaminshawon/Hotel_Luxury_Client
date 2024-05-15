import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
    const [review, setReview] = useState([]);



    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/reviews`)
            .then(res => res.json())
            .then(data => {

                setReview(data);


            })
        // const getData = async () => {
        //     const { data } = await axios(`${import.meta.env.VITE_API_URL}/reviews`)
        //     setReview(data);


        // }
        // getData();

    }, []);
    console.log()
    

    return (

        <div className="lg:mt-16 md:mt-10 mt-6">
            <h1 className='md:text-4xl  text-[28px] font-semibold text-center font-primary'>Testimonial</h1>
            <p className=" md:text-lg text-base font-secondary  text-center pb-5 md:px-10 px-1 lg:px-20 md:mt-7 mt-4 md:mb-3">
            Our testimonial section showcases genuine feedback from our delighted guests, highlighting their exceptional experiences and the top-notch service they received. From seamless check-ins to luxurious accommodations, our guests share their stories of memorable stays. Read through their reviews to see why we are the preferred choice for travelers seeking comfort and quality.
            </p>

            <div className=''>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"

                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 35,
                        },
                    }}
                >


                    <SwiperSlide> <div className='bg-[#dcf3e5] lg:p-8 md:p-6 p-2 text-xs lg:text-xl md:text-base shadow-xl lg:h-[432px] md:h-[336px] h-[300px] font-medium text-black font-primary'>
                        <p>Rating:  {review[0].rating}</p><br />
                        <p> <FaQuoteLeft></FaQuoteLeft> {review[0].comment} <span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base md:mt-5  mt-1 text-center '>
                        <div className="">
                                <img className=' md:w-16 md:h-16  w-12 h-12 rounded-full' src={review[0].photo} />
                            </div>
                            <div className='text-start w-[80%'>
                                <p>by <span className='font-primary font-semibold lg:text-xl md:text-base text-xs'> {review[0].userName}</span></p>
                                <i className='md:text-base text-xs'> at - {new Date(review[0].time).toLocaleDateString()}</i>

                            </div>
                        </div>

                    </div></SwiperSlide>

                    <SwiperSlide> <div className='bg-[#dcf3e5] lg:p-8 md:p-6 p-2 text-xs lg:text-xl md:text-base shadow-xl lg:h-[432px] md:h-[336px] h-[300px] font-medium text-black font-primary'>
                        <p>Rating:  {review[1].rating}</p><br />
                        <p> <FaQuoteLeft></FaQuoteLeft> {review[1].comment} <span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base md:mt-5  mt-1 text-center '>
                        <div className="">
                                <img className=' md:w-16 md:h-16  w-12 h-12 rounded-full' src={review[1].photo} />
                            </div>
                            <div className='text-start w-[80%'>
                                <p>by <span className='font-primary font-semibold lg:text-xl md:text-base text-xs'> {review[1].userName}</span></p>
                                <i className='md:text-base text-xs'> at - {new Date(review[1].time).toLocaleDateString()}</i>

                            </div>
                        </div>

                    </div></SwiperSlide>

                    <SwiperSlide> <div className='bg-[#dcf3e5] lg:p-8 md:p-6 p-2 text-xs lg:text-xl md:text-base shadow-xl lg:h-[432px] md:h-[336px] h-[300px] font-medium text-black font-primary'>
                        <p>Rating:  {review[2].rating}</p><br />
                        <p> <FaQuoteLeft></FaQuoteLeft> {review[2].comment} <span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base md:mt-5  mt-1 text-center '>
                        <div className="">
                                <img className=' md:w-16 md:h-16  w-12 h-12 rounded-full' src={review[2].photo} />
                            </div>
                            <div className='text-start w-[80%'>
                                <p>by <span className='font-primary font-semibold lg:text-xl md:text-base text-xs'> {review[2].userName}</span></p>
                                <i className='md:text-base text-xs'> at - {new Date(review[2].time).toLocaleDateString()}</i>

                            </div>
                        </div>

                    </div></SwiperSlide>

                    <SwiperSlide> <div className='bg-[#dcf3e5] lg:p-8 md:p-6 p-2 text-xs lg:text-xl md:text-base shadow-xl lg:h-[432px] md:h-[336px] h-[300px] font-medium text-black font-primary'>
                        <p>Rating:  {review[3].rating}</p><br />
                        <p> <FaQuoteLeft></FaQuoteLeft> {review[3].comment} <span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base md:mt-5  mt-1 text-center '>
                        <div className="">
                                <img className=' md:w-16 md:h-16  w-12 h-12 rounded-full' src={review[3].photo} />
                            </div>
                            <div className='text-start w-[80%'>
                                <p>by <span className='font-primary font-semibold lg:text-xl md:text-base text-xs'> {review[3].userName}</span></p>
                                <i className='md:text-base text-xs'> at -{new Date(review[3].time).toLocaleDateString()}</i>

                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide> <div className='bg-[#dcf3e5] lg:p-8 md:p-6 p-2 text-xs lg:text-xl md:text-base shadow-xl lg:h-[432px] md:h-[336px] h-[300px] font-medium text-black font-primary'>
                        <p>Rating:  {review[4].rating}</p><br />
                        <p> <FaQuoteLeft></FaQuoteLeft> {review[4].comment} <span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base md:mt-5  mt-1 text-center '>
                        <div className="">
                                <img className=' md:w-16 md:h-16  w-12 h-12 rounded-full' src={review[4].photo} />
                            </div>
                            <div className='text-start w-[80%'>
                                <p>by <span className='font-primary font-semibold lg:text-xl md:text-base text-xs'> {review[4].userName}</span></p>
                                <i className='md:text-base text-xs'> at -{new Date(review[4].time).toLocaleDateString()} </i>

                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide> <div className='bg-[#dcf3e5] lg:p-8 md:p-6 p-2 text-xs lg:text-xl md:text-base shadow-xl lg:h-[432px] md:h-[336px] h-[300px] font-medium text-black font-primary'>
                        <p>Rating:  {review[5].rating}</p><br />
                        <p> <FaQuoteLeft></FaQuoteLeft> {review[5].comment} <span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base md:mt-5  mt-1 text-center '>
                        <div className="">
                                <img className=' md:w-16 md:h-16  w-12 h-12 rounded-full' src={review[5].photo} />
                            </div>
                            <div className='text-start w-[80%'>
                                <p>by <span className='font-primary font-semibold lg:text-xl md:text-base text-xs'> {review[5].userName}</span></p>
                                <i className='md:text-base text-xs'> at - {new Date(review[5].time).toLocaleDateString()}</i>

                            </div>
                        </div>

                    </div></SwiperSlide>

               
                 
                    
                  


                </Swiper>
            </div>

        </div>
    );
};

export default Testimonial;