import { useQuery } from "@tanstack/react-query";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";


const TopScholarship = () => {
    const axiospublic = useAxiosPublic();
    const { data: scholarships = [] } = useQuery({
        queryKey: ['scholarships'],
        queryFn: async () => {
            const res = await axiospublic.get('/scholarships');
            return res.data;
        }
    });

    const sortedScholarships = Array.isArray(scholarships) ? scholarships.sort((a, b) => {
        // Sort by application fees (ascending) and post date (descending)
        if (a.applicationfees !== b.applicationfees) {
            return a.applicationfees - b.applicationfees;
        } else {
            return new Date(b.ScholarshipPostDate) - new Date(a.ScholarshipPostDate);
        }
    }) : [];

    const topScholarships = sortedScholarships.slice(0, 6);

    return (
        <div className="mb-10">
            <div className="text-center mt-5">
                <div className="divider"></div>
                <h1 className="text-3xl md:text-5xl font-semibold">Top Scholarship</h1>
                <div className="divider"></div>
            </div>
            <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-6 lg:w-10/12 mx-auto">
                {
                    topScholarships.map(scolar => <div className="card w-96 bg-base-100 shadow-xl" key={scolar._id}>
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
                                <h1 className="flex items-center gap-2"><IoMdStarOutline className="size-7" />Rating Average</h1>
                            </div>
                            <div className="card-actions">
                                <Link to={`/scholarship/${scolar._id}`} className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            <div className="text-center mt-5">
                {scholarships.length > 6 && (
                    <Link to="/allscholarship" className="btn btn-primary text-lg">
                        All Scholarships
                    </Link>
                )}
            </div>
        </div>
    );
};

export default TopScholarship;