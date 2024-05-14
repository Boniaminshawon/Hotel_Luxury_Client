import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/bundle';
import { Pagination, Autoplay, EffectCube } from 'swiper/modules';



const Banner = () => {
    return (
        <div className="  
        font-primary">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 4000,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}

            >

                <SwiperSlide>
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/3NQYP7c/375894469.jpg")' }} className=" bg-center bg-cover bg-no-repeat h-[315px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center">
                        <h1 className="lg:text-5xl leading-10  md:text-4xl text-2xl font-heading font-bold text-center text-[#aa7534]"> WHERE EVERY STAY IS A HUG OF HOSPITALITY</h1>
                        <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-secondary text-white px-3" > Where opulent comfort meets unparalleled hospitality, creating an unforgettable residential experience that transcends mere accommodation</p>
                        <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-[#f3a648] bg-[#2C4549]  md:text-xl text-base font-heading1 font-semibold rounded ">Explore More</button></a></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/HgFm3bq/photo-1618773928121-c32242e63f39.jpg")' }} className="bg-center bg-cover bg-opacity-100 bg-opacity  bg-no-repeat h-[315px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center">
                    <h1 className="lg:text-5xl leading-10  md:text-4xl text-2xl font-heading font-bold text-center text-[#ce8f41] lg:px-20 uppercase ">Unwind in Style, Experience the Epitome of Elegance at Our Hotel</h1>
                    <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-secondary text-white " > Where opulent comfort meets unparalleled hospitality, creating an unforgettable residential experience that transcends mere accommodation</p>
                    <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-[#f3a648] bg-[#2C4549]  md:text-xl text-base font-heading1 font-semibold rounded ">Explore More</button></a></div>
                </div></SwiperSlide>




                <SwiperSlide>
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/t2Nr76T/TAL-hotel-room-interior-bed-BOOKHOTEL0223-786eb1910382404a8806d1e1e8ed7716.jpg")' }} className="bg-center bg-cover bg-no-repeat h-[315px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center">
                        <h1 className="lg:text-5xl  leading-10 text-[#d69444] lg:px-20 uppercase md:text-4xl text-2xl font-heading font-bold text-center "> Elevate Your Stay, Experience Unforgettable Luxury at Our  Hotel</h1>
                        <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-secondary text-white " > Where opulent comfort meets unparalleled hospitality, creating an unforgettable residential experience that transcends mere accommodation</p>
                        <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-[#f3a648] bg-[#2C4549]  md:text-xl text-base font-heading1 font-semibold rounded ">Explore More</button></a></div>
                    </div>
                </SwiperSlide>




                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/mbWrdW7/e3f50f02.jpg")' }} className="bg-center bg-cover bg-opacity-100 bg-opacity  bg-no-repeat h-[315px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center ">
                 <h1 className="lg:text-5xl leading-10  md:text-4xl text-2xl font-heading font-bold text-center text-[#d69444] lg:px-20 uppercase ">Journey into Exquisite Comfort, Discover the Pinnacle of Hospitality at Our Hotel</h1>
                    <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-secondary text-white " > Where opulent comfort meets unparalleled hospitality, creating an unforgettable residential experience that transcends mere accommodation</p>
                    <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-[#f3a648] bg-[#2C4549]  md:text-xl text-base font-heading1 font-semibold rounded ">Explore More</button></a></div>
                </div></SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Banner;