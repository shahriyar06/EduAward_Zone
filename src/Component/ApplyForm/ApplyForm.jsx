import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDays } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const ApplyForm = () => {
    const {id} = useParams();
    
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { data: scholarships = []} = useQuery({
        queryKey: ['scholarships'],
        queryFn: async () => {
            const res = await axiosSecure.get('/scholarships');
            return res.data;
        }
    });
    const scholarship = scholarships.filter(s => s._id === id)
    const ascholarship = scholarship[0]

    const onSubmit = async (data) => {
        const imageFile = { image: data.Applicantphoto[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const application = {
                name: user.displayName,
                email: user.email,
                phonenumber: data.phonenumber,
                Scholarshipcategory: ascholarship.Scholarshipcategory,
                ScholarshipId: ascholarship._id,
                Applicantphoto: res.data.data.display_url,
                degree: data.degree,
                gender: data.gender,
                universityname: ascholarship.universityname,
                subjectcategory: ascholarship.subjectcategory,
                SSCResult: data.SSCResult,
                HSCResult: data.HSCResult,
                district: data.district,
                country: data.country,
                Studygap: data.Studygap,
                village: data.village,
                resentDate: startDate,
                Tuitionfees: ascholarship.Tuitionfees,
                applicationfees: ascholarship.applicationfees,
                scholarshipname: ascholarship.scholarshipname,
                servicecharge: ascholarship.servicecharge,
                universitycity: ascholarship.universitycity,
                universitycountry: ascholarship.universitycountry,
                universityimage: ascholarship.universityimage,
                worldrank: ascholarship.worldrank,  
                ScholarshipPostDate: ascholarship.ScholarshipPostDate,
                ApplicationDeadline: ascholarship.ApplicationDeadline,
                status: 'Pending'

            }
            const applicationRes = await axiosSecure.post('/applications', application);
            if (applicationRes.data.insertedId) {
                // show popup
                reset();
                Swal.fire({
                    title: 'Success!',
                    text: `Applied Successfully`,
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
                navigate(`/scholarship/${id}`);
            }
        }

    }

    return (
        <div>
            <Helmet>
                <title>EduAward Zone | Apply form</title>
            </Helmet>
            <div className="bg-cover bg-center lg:p-20  md:p-10 p-4" style={{ backgroundImage: "url('https://i.ibb.co/CbL19DJ/annie-spratt-Qckxruozj-Rg-unsplash.jpg')" }}>
                <div className="card card-side glass flex flex-col md:11/12  mx-auto p-12">
                    <div>
                        <h1 className="text-center lg:text-5xl text-3xl font-bold text-[#a7542dc7]">Apply</h1>
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
                                        <span className="label-text text-lg font-medium text-white">Scholarship Category</span>
                                    </label>
                                    <input type="text" name="Scholarshipcategory" defaultValue={ascholarship.Scholarshipcategory} placeholder={ascholarship.Scholarshipcategory} className="input border-b-2 border-b-[#ffffffa7] w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#080808' }} disabled />
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Subject Category</span>
                                    </label>
                                    <input type="text" name="SubjectCategory" defaultValue={ascholarship.subjectcategory} placeholder={ascholarship.subjectcategory} className="input border-b-2 border-b-[#ffffffa7] w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#080808' }} disabled />
                                </div>
                            </div>
                            {/* Phone Number  and University Name */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white"> Phone Number</span>
                                    </label>
                                    <input type="Text" name="phonenumber" placeholder="Phone Number" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("phonenumber", { required: true })} />
                                    {errors.phonenumber && <span className="text-red-600 text-sm">Phone Number is required</span>}
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">University Name</span>
                                    </label>
                                    <input type="text" name="universityname" defaultValue={ascholarship.universityname} placeholder={ascholarship.universityname} className="input border-b-2 border-b-[#ffffffa7] w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#080808' }} disabled />
                                </div>
                            </div>
                            {/*  Image  and Gender*/}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Applicant Photo</span>
                                    </label>
                                    <input type="file" name="Applicantphoto" className="file-input file-input-bordered w-full" {...register("Applicantphoto", { required: true })} />
                                    {errors.Applicantphoto && <span className="text-red-600 text-sm">Photo is required</span>}
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Gender</span>
                                    </label>
                                    <select type="dropdown" name='gender' className="px-3 w-full rounded-lg h-12 border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("gender", { required: true })}  >
                                        <option value=" ">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    {errors.gender && <span className="text-red-600 text-sm">Gender is required</span>}
                                </div>
                            </div>
                            {/* Degree and study Gap */}
                            <div className="md:flex gap-6 justify-between">
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
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Study gap</span>
                                    </label>
                                    <select type="dropdown" name='Studygap' className="px-3 w-full rounded-lg h-12 border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]"  {...register("Studygap")} >
                                        <option value="0">Study gap</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="6">6</option>
                                        <option value="8">8</option>
                                    </select>
                                    {errors.Studygap && <span className="text-red-600 text-sm">Study gap is required</span>}
                                </div>
                            </div>
                            {/* Country  and district */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Country</span>
                                    </label>
                                    <input type="Text" name="country" placeholder="Country" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("country", { required: true })} />
                                    {errors.country && <span className="text-red-600 text-sm">Country is required</span>}
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">District</span>
                                    </label>
                                    <input type="Text" name="district" placeholder="District" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("district", { required: true })} />
                                    {errors.district && <span className="text-red-600 text-sm">District is required</span>}
                                </div>
                            </div>
                            {/* today Date and village */}
                            <div className="lg:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">village</span>
                                    </label>
                                    <input type="Text" name="village" placeholder="village" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("village", { required: true })} />
                                    {errors.village && <span className="text-red-600 text-sm">Village is required</span>}
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
                            {/* SSC and HSC Result */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">SSC Result</span>
                                    </label>
                                    <input type="Text" name="SSCResult" placeholder="SSC Result" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("SSCResult", { required: true })} />
                                    {errors.SSCResult && <span className="text-red-600 text-sm">SSC Result is required</span>}
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">HSC Result</span>
                                    </label>
                                    <input type="Text" name="HSCResult" placeholder="HSC Result" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" {...register("HSCResult", { required: true })} />
                                    {errors.HSCResult && <span className="text-red-600 text-sm">HSC Result is required</span>}
                                </div>
                            </div>
                            <div className="w-full my-10">
                                <button className="btn w-full text-lg bg-[#D2093C] text-[#FFFFFF] hover:text-black">Apply</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyForm;