import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import { useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";



const Login = () => {
    const { signIn, googleSignIn,user,loading } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user]);
    const {
        register,
        handleSubmit,
        resetField,

        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { email, password } = data;

        try {
            //User Login
            const result = await signIn(email, password)
            const user = result.user;
            if (user) {
                navigate(location?.state || '/')
            }
            toast.success('Signin Successful')
        } catch (err) {
            console.log(err)
            setLoginError(err)
        }

        resetField('email');
        resetField('password');


    };

    const handleGoogleSignIn =async () => {
        try {
            // 1. google sign in from firebase
            const result = await googleSignIn()
            console.log(result.user)
      
           
          } catch (err) {
            console.log(err)
            setLoginError(err?.message)
          }

    }
    if (user || loading) return
    return (
        
        <div 
        style={{ backgroundImage: 'url("https://i.ibb.co/8XSY87W/6b4d462d8680a7560cc10a055a7da325.jpg")' }}
        className="bg-opacity-100 flex justify-center bg-no-repeat bg-center bg-cover ">

            <div className=" w-full lg:min-h-screen  g-base-200">

                <div className="hero-content flex-col ">

                    <div className="card shrink-0 p-0 w-full lg:w-[490px] shadow-2xl opacity-70 bg-base-100 ">

                        <div className="text-center ">
                            <h1 className="md:text-4xl text-[28px] mt-5 font-bold font-primary">Login now!</h1>
                            <Link onClick={handleGoogleSignIn} className="flex items-center  justify-center mt-8  border rounded-lg   hover:bg-gray-50 ">
                                <div className="px-4 py-2 text-center">
                                    <svg className="w-8 h-8" viewBox="0 0 40 40">
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                    </svg>
                                </div>

                                <span className=" py-3 font-bold text-center text-xl">Sign in with Google</span>
                            </Link>
                            {
                                loginError && <div className=" border-2 animate__animated animate__backInDown mx-6 mt-6 bg-[#ffebe8] py-3 border-[#dd3c10] rounded text-center">
                                    <h1 className="md:text-xl text-lg font-semibold">Wrong credentials</h1>
                                    <p className="md:text-lg text-base font-medium">Invalid email or password</p>

                                </div>
                            }
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered text-lg"
                                    {...register("email")}
                                />

                            </div>
                            <div className="form-control relative ">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="input input-bordered"
                                    {...register("password")}
                                />
                                <span className="text-2xl absolute right-2 bottom-3" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }

                                </span>
                                {errors.password && <span className="text-red-500 mt-2 text-lg">This field is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="] text-[#f3a648] font-secondary text-2xl font-bold btn hover:bg-[#235259] bg-[#2C4549] " value="Login" />
                            </div>
                        </form>
                        <div className="pl-8 pb-7 font-primary font-medium text-lg text-center md:text-2xl">
                            <p>Don't have account? Please <Link className="underline text-[#235259] font-semibold text-xl md:text-2xl" to={'/registration'}>Register</Link></p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;