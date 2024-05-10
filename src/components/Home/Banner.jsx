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


                
                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/mbWrdW7/e3f50f02.jpg")' }} className="bg-center bg-cover bg-opacity-100 bg-opacity  bg-no-repeat h-[350px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center">
                    <h1 className="lg:text-5xl leading-10  md:text-4xl text-2xl font-heading font-bold text-center "></h1>
                    <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-primary  "></p>
                    <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-white md:text-xl text-base font-heading1 font-semibold rounded bg-[#b18b5e]">Explore More</button></a></div>
                </div></SwiperSlide>

               

                <SwiperSlide>
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/t2Nr76T/TAL-hotel-room-interior-bed-BOOKHOTEL0223-786eb1910382404a8806d1e1e8ed7716.jpg")' }} className="bg-center bg-cover bg-no-repeat h-[350px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center">
                        <h1 className="lg:text-5xl leading-10  md:text-4xl text-2xl font-heading font-bold text-center "> </h1>
                        <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-primary  "></p>
                      <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-white md:text-xl text-base font-heading1 font-semibold rounded bg-[#b18b5e]">Explore More</button></a></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/3NQYP7c/375894469.jpg")' }} className="bg-center bg-cover bg-no-repeat h-[350px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center">
                        <h1 className="lg:text-5xl leading-10  md:text-4xl text-2xl font-heading font-bold text-center text-white"> </h1>
                        <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-primary text-white " ></p>
                      <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-white md:text-xl text-base font-heading1 font-semibold rounded bg-[#b18b5e]">Explore More</button></a></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/HgFm3bq/photo-1618773928121-c32242e63f39.jpg")' }} className="bg-center bg-cover bg-opacity-100 bg-opacity  bg-no-repeat h-[350px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center">
                    <h1 className="lg:text-5xl leading-10  md:text-4xl text-2xl font-heading font-bold text-center text-white "></h1>
                    <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-primary text-white "></p>
                  <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-white md:text-xl text-base font-heading1 font-semibold rounded bg-[#b18b5e]">Explore More</button></a></div>
                </div></SwiperSlide>

                
            </Swiper>
        </div>
    );
};

export default Banner;