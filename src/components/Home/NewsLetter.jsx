import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';



const NewsLetter = () => {
    const [email, setEmail] = useState("");
    // const [isEmailValid, setIsEmailValid] = useState(true);



    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        setEmail(email);
        if (email === "" || !/\S+@\S+\.\S+/.test(email)) {

            toast.error('please enter a valid email');

        } else {

            toast.success(`Thank you for subscribing with ${email}`);
            setEmail("");
        }
        e.target.reset();
    }


    return (
        <div>
            <header className="bg-white ">

                <div className="container lg:px-16 md:px-0 px-5 py-3 mx-auto">
                    <div className="items-center justify-center md:flex">
                        <div className="w-full lg:w-[40%] ">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl py-3 font-secondary font-semibold text-black dark:text-white lg:text-[40px] text-center md:text-start">Subscribe Our <span className="text-[#2C4549]">Newsletter</span></h1>

                                <p className="md:mt-3 mt-1 font-secondary md:text-lg text-base text-gray-600 text-center md:text-start">Elevate your residential hotel experience with our newsletter, packed with insider tips, exclusive offers, and exciting updates tailored just for you.</p>
                                <div className=" flex sm:hidden items-center justify-center w-full mt-6 lg:mt-0 lg:w-[60%] ">
                            <img className="w-full md:h-full h-[220px] max-w-md" src="https://i.ibb.co/hBTDvS4/newsletter-plantilla-1024x1024.webp" alt="email illustration vector art" />
                        </div>
                                <div className="flex flex-col mt-5 md:mt-8 md:space-y-0 md:flex-row">
                                    <form onSubmit={handleSubmit}>
                                        <Toaster />
                                        <input id="email" type="text" name="email" className="px-5 py-3 text-gray-700 bg-white border border-[#2C4549] rounded-md  md:w-auto w-full" placeholder="Email Address" />
                                        <input className="w-full px-5 py-2 text-lg font-medium tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded-lg md:w-auto lg:mx-4 hover:bg-gray-400 hover:text-white focus:outline-none md:mt-0 mt-4" type="submit" value="Subscribe" />
                                    </form>

                                </div>
                            </div>
                        </div>

                        <div className=" hidden sm:flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-[60%]">
                            <img className="w-full md:h-full h-[220px] max-w-md" src="https://i.ibb.co/hBTDvS4/newsletter-plantilla-1024x1024.webp" alt="email illustration vector art" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NewsLetter;