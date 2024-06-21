import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { useState } from "react";


const AllScholarship = () => {

    const axiosSecure = useAxiosSecure();
    const { data: scholarships = [] } = useQuery({
        queryKey: ['scholarships'],
        queryFn: async () => {
            const res = await axiosSecure.get('/scholarships');
            return res.data;
        }
    });
    const [searchQuery, setSearchQuery] = useState("");

    const filteredScholar = scholarships.filter(scholar => {
        return scholar.scholarshipname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scholar.universityname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scholar.degree.toLowerCase().includes(searchQuery.toLowerCase())
    });

    return (
        <div className="my-10">
            <Helmet>
                <title>EduAward Zone | All Scholarship</title>
            </Helmet>
            <div className='lg:w-6/12 w-11/12 mx-auto my-6 relative'>
                <input type="text" placeholder="Search scholarship name" className="rounded-full h-14 pl-6 text-lg w-full text-[#080808] border border-[#947351]" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

                <button className="btn rounded-r-full h-14 md:w-36 w-24 btn-outline text-[#947351] hover:text-[#FFFFFF] hover:bg-[#947351] hover:border-[#947351] text-xl absolute right-0">Search</button>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:w-10/12 mx-auto">
                {
                    filteredScholar.map(scolar => <div className="card w-96 bg-base-100 shadow-xl" key={scolar._id}>
                        <figure className="p-5">
                            <img src={scolar.universityimage} alt="Shoes" className="rounded-xl w-full h-52" />
                        </figure>
                        <div className="px-5 pb-5 space-y-3">
                            <div className="flex flex-grow">
                                <h2 className="text-2xl">{scolar.universityname}</h2>
                            </div>
                            <h1 className="text-lg">{scolar.Scholarshipcategory}</h1>
                            <h1 className="text-lg">{scolar.subjectcategory}</h1>
                            <h1 className="text-lg">{scolar.universitycity}, {scolar.universitycountry}</h1>
                            <h1 className="text-lg flex items-center gap-2"><FaMoneyBill1Wave className="size-6" /> Application Fees: {scolar.applicationfees}</h1>
                            <div className="flex justify-between text-lg">
                                <h1 className="flex items-center gap-2"><IoCalendarNumberOutline className="size-6" /> {scolar.ApplicationDeadline.slice(0, 10)}</h1>
                                {/* <h1>{scolar.universityname}</h1> */}
                                <h1 className="flex items-center gap-2"><IoMdStarOutline className="size-7" />Rating Average</h1>
                            </div>
                            <div className="card-actions">
                                <button className="btn btn-primary text-lg">Details</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>

        </div>
    );
};

export default AllScholarship;