import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaCalendarDays } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";


const GiveReview = () => {
    const application = useLoaderData();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        const Review = {
            name: user.displayName,
            email: user.email,
            Reviewerphoto: user.photoURL,
            ScholarshipId: application.ScholarshipId,
            universityname: application.universityname,
            scholarshipname: application.scholarshipname,
            Ratingpoint: data.Ratingpoint,
            Reviewcomment: data.Reviewcomment,
            Reviewdate: startDate

        }
        axiosPublic.post('/reviews', Review)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "middle-center",
                        icon: "success",
                        title: "Review done!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();
                    navigate('/dashboard/myapplication')
                }
            })


    }

    return (
        <div>
            <Helmet>
                <title>EduAward Zone | Review form</title>
            </Helmet>
            <div className="bg-cover bg-center lg:p-20  md:p-10 p-4" style={{ backgroundImage: "url('https://i.ibb.co/CbL19DJ/annie-spratt-Qckxruozj-Rg-unsplash.jpg')" }}>
                <div className="card card-side glass flex flex-col md:11/12  mx-auto p-12">
                    <div>
                        <h1 className="text-center lg:text-5xl text-3xl font-bold text-[#a7542dc7]">Review</h1>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            {/* Email and name */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user.displayName} placeholder={user.displayName} className="input border-b-2 border-b-[#ffffffa7] w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#080808' }} disabled />
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Email</span>
                                    </label>
                                    <input type="text" name="email" defaultValue={user.email} placeholder={user.email} className="input border-b-2 border-b-[#ffffffa7] w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#080808' }} disabled />
                                </div>
                            </div>
                            {/* Scholarship category and name */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Scholarship Name</span>
                                    </label>
                                    <input type="text" name="scholarshipname" defaultValue={application.scholarshipname} placeholder={application.scholarshipname} className="input border-b-2 border-b-[#ffffffa7] w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#080808' }} disabled />
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">University Name</span>
                                    </label>
                                    <input type="text" name="universityname" defaultValue={application.universityname} placeholder={application.universityname} className="input border-b-2 border-b-[#ffffffa7] w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#080808' }} disabled />
                                </div>
                            </div>
                            {/* Phone Number  and University Name */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Review Comment</span>
                                    </label>
                                    <input type="Text" name="Reviewcomment" placeholder="Review Comment" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("Reviewcomment", { required: true })} />
                                    {errors.Reviewcomment && <span className="text-red-600 text-sm">Review Comment is required</span>}
                                </div>

                            </div>
                            {/*  Rating and date*/}
                            <div className="md:flex gap-6 justify-between">
                            <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Rating Point</span>
                                    </label>
                                    <select type="dropdown" name='Ratingpoint' className="px-3 w-full rounded-lg h-12 border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("Ratingpoint", { required: true })}  >
                                        <option value="0">Select Rating Point</option>
                                        <option value="1">1</option>
                                        <option value="1.5">1.5</option>
                                        <option value="2">2</option>
                                        <option value="2.5">2.5</option>
                                        <option value="3">3</option>
                                        <option value="3.5">3.5</option>
                                        <option value="4">4</option>
                                        <option value="4.5">4.5</option>
                                        <option value="5">5</option>
                                    </select>
                                    {errors.Ratingpoint && <span className="text-red-600 text-sm">Degree is required</span>}
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Today Date</span>
                                    </label>
                                    <div className="flex gap-6 items-center">
                                        <FaCalendarDays className=" text-2xl" />
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            className="lg:w-[430px] md:w-[490px] w-[230px] rounded-lg h-12 border-b-2 border-b-[#ffffffa7] bg-transparent text-[#080808] items-center text-center flex"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full my-10">
                                <button className="btn w-full text-lg bg-[#D2093C] text-[#FFFFFF] hover:text-black">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiveReview;