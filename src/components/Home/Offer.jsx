import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/bundle';


const Offer = () => {
    return (
        <div className=" mt-10 bg-[#8e5d20] 
        font-primary">
            <Swiper

                slidesPerView={2}
                spaceBetween={30}
               


            >

                <SwiperSlide>
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/FY6mppR/hotel-room-grand-hyatt-1280x850.jpg")' }} className=" bg-center bg-cover bg-no-repeat h-[350px] md:h-[480px] lg:h-[400px] flex flex-col justify-center items-center">
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/X2fL4sH/leonardo-5581874-154002374-120388.jpg")' }} className=" bg-center bg-cover bg-no-repeat h-[350px] md:h-[480px] lg:h-[400px] flex flex-col justify-center items-center">
                       
                    </div>
                </SwiperSlide>













            </Swiper>
        </div>
    );
};

export default Offer;