


const Offer = () => {
    return (
        <div className=" md:mt-10 mt-7 
        font-primary">
            <h1 className='lg:text-5xl md:text-4xl text-3xl font-semibold text-center font-primary md:mb-10 mb-5'> Special Offer</h1>
            <div className="grid grid-cols-1 lg:gap-7 md:gap-4 gap-6 md:grid-cols-2 bg-[#8e5d20]">
                <div style={{ backgroundImage: 'url("https://i.ibb.co/X2fL4sH/leonardo-5581874-154002374-120388.jpg")' }} className=" bg-center bg-cover bg-no-repeat h-[280px] md:h-[400px] lg:h-[400px] flex flex-col justify-center items-center">
             
                    <h1 className="uppercase my-5 md:text-4xl text-[28px] text-[#fdab47] text-center font-bold font-primary"><span className="md:text-5xl text-[36px]">7%</span> off <br /> and free buffet dinner</h1>
                    <p className=" text-white md:text-2xl text-xl text-center font-secondary font-medium">Only Booking for <span className="uppercase md:text-3xl text-2xl text-green-500  font-bold font-primary">$200-$250</span> price range room</p>

                </div>
                <div style={{ backgroundImage: 'url("https://i.ibb.co/cxvJCt9/87100426.jpg")' }} className="md:ml-5 bg-center bg-cover bg-no-repeat h-[280px] md:h-[400px] lg:h-[400px] flex flex-col justify-center items-center">
                
                    <h1 className="uppercase my-5 md:text-4xl text-[28px] text-[#ffab45] text-center font-bold font-primary"><span className="md:text-5xl text-[36px]">5%</span> off <br /> and free dinner</h1>

                    <p className=" text-white md:text-2xl text-xl text-center font-secondary font-medium">Only Booking for <span className="uppercase md:text-3xl text-2xl text-green-500  font-bold font-primary">$150-$200</span> price range room</p>

                </div>
            </div>
        </div>
    );
};

export default Offer;




