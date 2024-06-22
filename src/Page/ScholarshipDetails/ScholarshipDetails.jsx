import { FaRegCalendarAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";


const ScholarshipDetails = () => {
    const scholarship = useLoaderData();
    return (
        <div>
            <div className="my-5">
                <div className="lg:w-8/12 md:w-10/12  w-11/12 border-3xl mx-auto p-4 shadow-2xl bg-gray-50 text-gray-800">
                    <div className="text-end pb-4 border-bottom">
                        <h1 className="text-lg text-[#FF0000]">{scholarship.degree}</h1>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={scholarship.universityimage} alt="" className="w-full rounded-md  md:h-[500px] cover bg-gray-500" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-default-600">{scholarship.scholarshipname}</h3>
                            <p className="leading-snug text-gray-600">{scholarship.universityname}</p>
                        </div>
                        <div className="space-y-2 p-6">
                            <h2 className="flex items-center gap-3 text-lg"><span className="font-medium">Subject Category : </span>{scholarship.subjectcategory}</h2>
                            <h2 className="flex items-center gap-3 text-lg"><span className="font-medium">Scholarship Category : </span>{scholarship.Scholarshipcategory}</h2>
                            <h2 className="flex items-center gap-3 text-lg"><span className="font-medium">World Rank : </span>{scholarship.worldrank}</h2>
                            <h2 className="flex items-center gap-3 text-lg"><FaRegMoneyBillAlt className="text-2xl text-[#00A550]" /><span className="font-medium">Tuition Fees : </span>{scholarship.Tuitionfees}</h2>
                            <h2 className="flex items-center gap-3 text-lg"><FaRegMoneyBillAlt className="text-2xl text-[#00A550]" /><span className="font-medium">Application Fees : </span>{scholarship.applicationfees}</h2>
                            <h2 className="flex items-center gap-3 text-lg"><FaRegMoneyBillAlt className="text-2xl text-[#00A550]" /><span className="font-medium">Service Charge : </span>{scholarship.servicecharge}</h2>
                            <div className="md:flex justify-between">
                                <h2 className="flex items-center gap-3 text-lg"><FaRegCalendarAlt className="text-2xl" /><span className="font-medium">Post Date :</span>{scholarship.ScholarshipPostDate.slice(0, 10)}</h2>
                                <h2 className="flex items-center gap-3 text-lg"><FaRegCalendarAlt className="text-2xl" /><span className="font-medium">Deadline :</span>{scholarship.ApplicationDeadline.slice(0, 10)}</h2>
                            </div>
                            <h2 className="flex items-center gap-3 text-lg"><IoLocationSharp className="text-2xl text-[#ff51008d]" />{scholarship.universitycity}, {scholarship.universitycountry}</h2>
                        </div>
                        <div className="flex gap-7">
                            <div className="text-2xl font-medium"><h1>Author :</h1></div>
                            <div className="text-lg mt-11">
                                <h1><span className="font-medium">Name :  </span>{scholarship.name}</h1>
                                <h1><span className="font-medium">Email :  </span>{scholarship.email}</h1>
                            </div>
                        </div>
                        <div className="text-end pr-5">
                            <Link to={`/payment/${scholarship._id}`} className="btn btn-accent text-xl text-white"><button>Apply</button></Link>
                            {/* <Link to={`/applyedjob/${id}`} className="btn btn-accent text-xl text-white"><button onClick={handleApplyClick}>Apply</button></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipDetails;