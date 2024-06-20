import { Helmet } from "react-helmet-async";
import signupimg from '../../../public/Image/signup.jpg';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../../Share/SocialLogin/SocialLogin";



const SignUp = () => {
    const [restriction, setrestriction] = useState('')
    const [showpassword, setshowpassword] = useState(false);
    const { register, formState: { errors } } = useForm();

    return (
        <div>
            <Helmet>
                <title>EduAward Zone | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: "url('https://i.ibb.co/ZztN4kQ/signup.jpg')" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="grid grid-rows lg:grid-cols-9 md:grid-cols-8 w-10/12 lg:w-8/12 mx-auto my-14 md:my-28 items-center md:gap-4 lg:gap-8 p-3 bg-[#ffffffcc]">
                    <div className="md:col-span-4 ml-2">
                        <form>
                    {/* <form onSubmit={handleSubmit(onSubmit)} className="card-body"> */}
                        <div className="text-center mb-3">
                            <h1 className="text-3xl font-medium">Create an account</h1>
                            <p className="text-sm">Or, <span className="text-[#D2093C]"><Link to='/login'>log in to your account</Link> </span></p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="url" name="photourl" placeholder="Photo Url" className="input input-bordered" {...register("photo")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
                        </div>
                        <div className=" ">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showpassword ? "text" : "Password"} name="password" placeholder="password" className="input input-bordered"  {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-600 text-sm">Password is required</span>}
                                <h1 className="" onClick={() => setshowpassword(!showpassword)}>
                                    {
                                        showpassword ? <FaEyeSlash className="relative left-64 md:left-96 bottom-8" /> : <FaEye className="relative left-64 md:left-96 bottom-8" />
                                    }
                                </h1>
                                <div>
                                    {
                                        restriction && <p className='text-red-600 text-sm'>{restriction}</p>
                                    }
                                </div>
                                <div className="text-sm ml-6 mt-2 text-[#00000096]">
                                    <p>At least 6 characters</p>
                                    <p>At least 1 lowercase letter and 1 uppercase letter</p>
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline text-[#D2093C] hover:text-[#FFFFFF] hover:bg-[#D2093C] hover:border-[#D2093C] text-lg">Register</button>
                            {/* <ToastContainer /> */}
                        </div>
                        <div className="mt-5">
                            <div className="flex items-center">
                                <div className="h-3 w-2/5 content-evenly"><hr /></div>
                                <div className="w-1/5 text-center"><h1 >Or</h1></div>
                                <div className="h-3 w-2/5 content-evenly"><hr /></div>
                            </div>
                        </div>
                    </form>
                        <div className="mx-8 mb-5">
                        <SocialLogin></SocialLogin>
                    </div>
                    </div>
                    <div className="lg:col-span-5 md:col-span-4">
                        <img src={signupimg} alt="login image" className="w-full h-full md:h-[600px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;