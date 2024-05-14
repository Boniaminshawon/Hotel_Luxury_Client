import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import 'animate.css';
import { useState } from "react";
import swal from 'sweetalert';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";

const Registration = () => {
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile, setUser, logOut } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField
    } = useForm()

    const onSubmit = async (data) => {

        const { email, password, name, image } = data;

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one lowercase character.');
            return;
        }
        setRegisterError('');

        try {
            const result = await createUser(email, password);
            const user = result.user;
            swal("Wow!", "Registered successfully! You have to login now ", "success");

            await updateUserProfile(name, image)

            setUser({ ...result?.user, photoURL: image, displayName: name });
            logOut();
            setTimeout(() => {
                if (user) {
                    navigate('/login')
                }
            }, 2000);
        } catch (error) {
            swal("Oops!", "Your email already have used!", "error");
            // console.log(error);
        }

        resetField('email')
        resetField('password')
        resetField('photo')
        resetField('name')


    };

    return (
        <div style={{ backgroundImage: 'url("https://i.ibb.co/1K4QH26/leonardo-3854685-117304286-157899.jpg")' }} className=" bg-opacity-100 flex justify-center bg-no-repeat bg-center bg-cover ">
            <Helmet>
                <title>Registration - Hotel Luxury</title>
            </Helmet>
            <div className="md:hero w-full lg:min-h-screen ">
                <div className="hero-content flex-col ">

                    <div className="card shrink-0 lg:w-[490px] w-full shadow-2xl  bg-base-100 opacity-85">
                        <div className="text-center ">
                            <h1 className="md:text-4xl text-[28px] mt-5 font-bold font-primary">Registration now!</h1>

                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered"
                                    {...register("name", { required: true })}
                                />
                                {errors.password && <span className="text-red-500 mt-2 text-lg">This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-red-500 mt-2 text-lg">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Photo</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered"
                                    {...register("image",)}
                                />


                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="input  input-bordered"
                                    {...register("password", { required: true })}
                                />
                                <div className="relative">
                                    <span className="text-2xl absolute right-2 bottom-3" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }

                                    </span>
                                </div>

                                {registerError && <p className="text-red-500  font-primary text-lg mt-1">{registerError}</p>}

                                {errors.password && <span className="text-red-500 mt-2 text-lg">This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className=" text-[#f3a648] font-secondary text-2xl  font-bold btn hover:bg-[#235259] bg-[#2C4549] " value="Registration" />
                            </div>
                        </form>
                        <div className="md:px-8 px-4 pb-7 font-primary text-center font-medium text-lg md:text-2xl">
                            <p>Already have account? Please <Link className="underline text-[#235259] font-semibold text-xl md:text-2xl" to={'/login'}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;