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

           

                <div className="container px-16 py-3 mx-auto">
                    <div className="items-center justify-center lg:flex">
                        <div className="w-full lg:w-[40%]">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl py-3 font-secondary font-semibold text-black dark:text-white lg:text-[40px]">Subscribe Our <span className="text-[#2C4549]">Newsletter</span></h1>

                                <p className="mt-3 text-gray-600 dark:text-gray-400">be the first to knows when our <span className="font-medium text-blue-500">Brand</span> is live</p>

                                <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                                    <form onSubmit={handleSubmit}>
                                        <Toaster />
                                        <input id="email" type="text" name="email" className="px-5 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-800   focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
                                        <input className="w-full px-5 py-2 text-lg font-medium tracking-wider text-[#f3a648] uppercase transition-colors duration-300 transform bg-[#2C4549] rounded-lg lg:w-auto lg:mx-4 hover:bg-gray-400 hover:text-white focus:outline-none " type="submit" value="Subscribe" />
                                    </form>

                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-[60%]">
                            <img className="w-full h-full max-w-md" src="https://i.ibb.co/hBTDvS4/newsletter-plantilla-1024x1024.webp" alt="email illustration vector art" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NewsLetter;