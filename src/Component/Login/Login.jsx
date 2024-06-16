import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import signinimg from '../../../public/Image/login.jpg';
// import Swal from "sweetalert2";


const Login = () => {

    const [showpassword, setshowpassword] = useState(false);
    const [restriction, setrestriction] = useState('')
    // const { signin } = useContext(AuthContext);
    const { register, formState: { errors } } = useForm();
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const navigate = useNavigate()
    // const location = useLocation()
    // const from = location?.state || '/'
    // const onSubmit = (data) => {
    //     setrestriction('')
    //     signin(data.email, data.password)
    //         .then(result => {
    //             if (result.user) {
    //                 navigate(from)
    //                 Swal.fire({
    //                     position: "middle-center",
    //                     icon: "success",
    //                     title: "Login Successfully.",
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    //             }
    //         })
    //         .catch((error) => {
    //             setrestriction('Invalid email or password')
    //             console.error(error)
    //         });

    // }

    return (
        <div>
            <Helmet>
                <title>EduAward Zone | Log in</title>
            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: "url('https://i.ibb.co/gPj35Ts/signin.jpg')" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="grid grid-rows lg:grid-cols-9 md:grid-cols-8 w-10/12 lg:w-8/12 mx-auto my-14 md:my-28 items-center md:gap-4 lg:gap-8 p-3 bg-white">
                    <div className="lg:col-span-5 md:col-span-4">
                        <img src={signinimg} alt="login image" className="w-full h-full md:h-[600px]" />
                    </div>
                    <div className="md:col-span-4">
                        <form className="">
                            {/* <form onSubmit={handleSubmit(onSubmit)} className="card-body"> */}
                            <div className="text-center mb-3">
                                <h1 className="lg:text-3xl text-xl font-medium">Log in to your account</h1>
                                <p className="text-sm">Or, <span className="text-[#D2093C]"><Link to='/signup'>create an account</Link> </span></p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showpassword ? "text" : "Password"} name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                                <h1 className="" onClick={() => setshowpassword(!showpassword)}>
                                    {
                                        showpassword ? <FaEyeSlash className="relative left-64 lg:left-96 bottom-8" /> : <FaEye className="relative lg:left-96 left-64 bottom-8" />
                                    }
                                </h1>
                                {errors.password && <span className="text-red-600 text-sm">Password is required</span>}
                                <div>
                                    {
                                        restriction && <p className='text-red-600 text-sm'>{restriction}</p>
                                    }
                                </div>
                                <label className="label">
                                    <Link className="label-text-alt link link-hover text-[#D2093C]">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline text-[#D2093C] hover:text-[#FFFFFF] hover:bg-[#D2093C] hover:border-[#D2093C] text-xl">Login</button>
                            </div>
                            <div className="mt-5">
                                <div className="flex items-center">
                                    <div className="h-3 w-2/5 content-evenly"><hr /></div>
                                    <div className="w-1/5 text-center"><h1 >Or</h1></div>
                                    <div className="h-3 w-2/5 content-evenly"><hr /></div>
                                </div>
                            </div>
                        </form>
                        {/* <div className="mx-8 mb-5">
                        <Sociallogin></Sociallogin>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;