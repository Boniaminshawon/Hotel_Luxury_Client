import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/bundle';


const Offer = () => {
    return (
        <div className=" mt-10 
        font-primary">
            <h1 className='text-5xl font-semibold text-center font-primary mb-10'> Special Offer</h1>
            <div className="bg-[#8e5d20] ">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                >
                    <SwiperSlide>
                        <div style={{ backgroundImage: 'url("https://i.ibb.co/X2fL4sH/leonardo-5581874-154002374-120388.jpg")' }} className=" bg-center bg-cover bg-no-repeat h-[350px] md:h-[480px] lg:h-[400px] flex flex-col justify-center items-center">
                            {/* <h1 className="uppercase text-5xl text-white font-primary font-bold">Special Offer</h1> */}
                            <h1 className="uppercase my-5 text-4xl text-[#fdab47] text-center font-bold font-primary"><span className="text-5xl">7%</span> off <br /> and free buffet dinner</h1>
                            <p className=" text-white text-2xl text-center font-secondary font-medium">Only Booking for <span className="uppercase text-3xl text-green-500  font-bold font-primary">$200-$250</span> price range room</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ backgroundImage: 'url("https://i.ibb.co/cxvJCt9/87100426.jpg")' }} className=" bg-center bg-cover bg-no-repeat h-[350px] md:h-[480px] lg:h-[400px] flex flex-col justify-center items-center">
                            {/* <h1 className="uppercase text-5xl  text-white font-primary font-bold">Special Offer</h1> */}
                            <h1 className="uppercase my-5 text-4xl text-[#ffab45] text-center font-bold font-primary"><span className="text-5xl">5%</span> off <br /> and free dinner</h1>

                            <p className=" text-white text-2xl text-center font-secondary font-medium">Only Booking for <span className="uppercase text-3xl text-green-500  font-bold font-primary">$150-$200</span> price range room</p>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Offer;




