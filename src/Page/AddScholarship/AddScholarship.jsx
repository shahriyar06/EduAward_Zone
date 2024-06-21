import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDays } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddScholarship = () => {

    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const [deadlineDate, setdeadlineDate] = useState(new Date());
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        const imageFile = {image: data.universityimage[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        });
        if(res.data.success){
            const Scholarship ={
                name: user.displayName,
                email: user.email,
                universityname: data.universityname,
                Scholarshipcategory: data.Scholarshipcategory,
                Tuitionfees: data.Tuitionfees,
                applicationfees: parseFloat(data.applicationfees),
                degree: data.degree,
                scholarshipname: data.scholarshipname,
                servicecharge: data.servicecharge,
                subjectcategory: data.subjectcategory,
                universitycity: data.universitycity,
                universitycountry: data.universitycountry,
                universityimage: res.data.data.display_url,
                worldrank: data.worldrank,  
                ScholarshipPostDate: startDate,
                ApplicationDeadline: deadlineDate

            }
            const scholarshipRes = await axiosSecure.post('/scholarships', Scholarship);
            console.log(scholarshipRes.data)
            if(scholarshipRes.data.insertedId){
                // show popup
                reset();
                Swal.fire({
                    title: 'Success!',
                    text: `${data.scholarshipname} is added to the Scholarship`,
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
                
            }
        }
        

        // // set data to server
        // fetch('https://kajer-khoj-server.vercel.app/joblist', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(jobPost)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
                    
        //             form.reset();
        //         }
        //     })

    }

    return (
        <div>
            <Helmet>
                <title>EduAward Zone | Dashboard | Add Scholarship</title>
            </Helmet>
            <div className="bg-cover bg-center lg:p-20  md:p-10 p-4" style={{ backgroundImage: "url('https://i.ibb.co/CbL19DJ/annie-spratt-Qckxruozj-Rg-unsplash.jpg')" }}>
                <div className="card card-side glass flex flex-col md:11/12  mx-auto p-12">
                    <div>
                        <h1 className="text-center lg:text-5xl text-3xl font-bold text-[#a7542dc7]">Add Scholarships</h1>
                        <p className="text-center my-5 text-xl w-11/12 mx-auto">Post new job opportunities on our platform! Reach potential candidates and grow your team effortlessly. Join us in shaping careers today.</p>
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
                            {/* Scholarship Name  and University Name */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Scholarship Name</span>
                                    </label>
                                    <input type="Text" name="scholarshipname" placeholder="Scholarship Name" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("scholarshipname", { required: true })} />
                                    {errors.scholarshipname && <span className="text-red-600 text-sm">Scholarship Name is required</span>}
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">University Name</span>
                                    </label>
                                    <input type="Text" name="universityname" placeholder="University Name" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("universityname", { required: true })} />
                                    {errors.universityname && <span className="text-red-600 text-sm">University Name is required</span>}
                                </div>
                            </div>
                            {/* University Image/Logo  and Degree*/}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">University Image/Logo</span>
                                    </label>
                                    <input type="file" name="universityimage" className="file-input file-input-bordered w-full" {...register("universityimage", { required: true })} />
                                    {errors.universityimage && <span className="text-red-600 text-sm">University Image is required</span>}
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Degree</span>
                                    </label>
                                    <select type="dropdown" name='degree' className="px-3 w-full rounded-lg h-12 border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("degree", { required: true })}  >
                                        <option value=" ">Select Degree</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="Bachelor">Bachelor</option>
                                        <option value="Masters">Masters</option>
                                    </select>
                                    {errors.degree && <span className="text-red-600 text-sm">Degree is required</span>}
                                </div>
                            </div>
                            {/* Subject category and Scholarship category */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Subject Category</span>
                                    </label>
                                    <select type="dropdown" name='subjectcategory' className="px-3 w-full rounded-lg h-12 border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]"  {...register("subjectcategory", { required: true })}  >
                                        <option value=" ">Subject Category</option>
                                        <option value="Agriculture">Agriculture</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Doctor">Doctor</option>
                                    </select>
                                    {errors.subjectcategory && <span className="text-red-600 text-sm">Subject Category is required</span>}
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Scholarship Category</span>
                                    </label>
                                    <select type="dropdown" name='Scholarshipcategory' className="px-3 w-full rounded-lg h-12 border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]"  {...register("Scholarshipcategory", { required: true })} >
                                        <option value=" ">Scholarship Category</option>
                                        <option value="Full fund">Full fund</option>
                                        <option value="Partial">Partial</option>
                                        <option value="Self-fund">Self-fund</option>
                                    </select>
                                    {errors.Scholarshipcategory && <span className="text-red-600 text-sm">Scholarship Category is required</span>}
                                </div>
                            </div>
                            {/* University Country  and University Name */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">University Country</span>
                                    </label>
                                    <input type="Text" name="universitycountry" placeholder="University Country" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("universitycountry", { required: true })} />
                                    {errors.universitycountry && <span className="text-red-600 text-sm">University Country is required</span>}
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">University City</span>
                                    </label>
                                    <input type="Text" name="universitycity" placeholder="University City" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("universitycity", { required: true })} />
                                    {errors.universitycity && <span className="text-red-600 text-sm">University City is required</span>}
                                </div>
                            </div>
                            {/* Service charge and University World rank */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Service Charge</span>
                                    </label>
                                    <input type="Text" name="servicecharge" placeholder="Service Charge" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("servicecharge", { required: true })} />
                                    {errors.servicecharge && <span className="text-red-600 text-sm">Service Charge is required</span>}
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">University World Rank</span>
                                    </label>
                                    <input type="Text" name="worldrank" placeholder="University World Rank" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("worldrank", { required: true })} />
                                    {errors.worldrank && <span className="text-red-600 text-sm">World Rank is required</span>}
                                </div>
                            </div>
                            {/* Scholarship post Date and Application Deadline */}
                            <div className="lg:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Scholarship Post Date</span>
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
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Application Deadline</span>
                                    </label>
                                    <div className="flex gap-6 items-center">
                                        <FaCalendarDays className=" text-2xl" />
                                        <DatePicker
                                            selected={deadlineDate}
                                            onChange={(date) => setdeadlineDate(date)}
                                            className="lg:w-[430px] md:w-[490px] w-[230px] rounded-lg h-12 border-b-2 border-b-[#ffffffa7] bg-transparent text-[#080808] items-center text-center flex"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Tuition fees and Address */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Tuition Fees</span>
                                    </label>
                                    <input type="Text" name="Tuitionfees" placeholder="Tuition Fees" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("Tuitionfees", { required: true })} />
                                    {errors.Tuitionfees && <span className="text-red-600 text-sm">Tuition Fees is required</span>}
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Application Fees</span>
                                    </label>
                                    <input type="Text" name="applicationfees" placeholder="Application Fees" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("applicationfees", { required: true })} />
                                    {errors.applicationfees && <span className="text-red-600 text-sm">Application Fees is required</span>}
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

export default AddScholarship;