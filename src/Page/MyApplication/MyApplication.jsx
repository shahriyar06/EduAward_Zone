import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FaPen, FaTimesCircle } from "react-icons/fa";
import { BiSolidDetail } from "react-icons/bi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useContext } from "react";


const MyApplication = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext)
    const { data: applications = [], refetch } = useQuery({
        queryKey: ['applications'],
        queryFn: async () => {
            const res = await axiosSecure.get('/applications');
            return res.data;
        }
    });
    
    
    const aapplications = applications.filter(s => s.email === user.email)

    const handleDelete = (scholar) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/applications/${scholar._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${aapplications.scholarshipname} has been deleted.`,
                                icon: "success"
                            });
                            refetch();
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="text-center mt-5">
                <div className="divider"></div>
                <h1 className="text-5xl font-semibold">My Applies</h1>
                <div className="divider"></div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead>
                            <tr className=" text-lg ">
                                <th></th>
                                <th>University Name</th>
                                <th>University Address</th>
                                <th>Application Feedback</th>
                                <th>Subject Category</th>
                                <th>Applied Degree</th>
                                <th>Application Fees</th>
                                <th>Service Charge</th>
                                <th>Status</th>
                                <th>Details</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th>Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                aapplications.map((scholar, index) =>
                                    <tr className="hover  text-lg " key={scholar._id}>
                                <th>{index+1}</th>
                                <th>{scholar.universityname}</th>
                                <th>{scholar.universitycity}, {scholar.universitycountry}</th>
                                <th>{scholar.feedback}</th>
                                <th>{scholar.subjectcategory}</th>
                                <th>{scholar.degree}</th>
                                <th>{scholar.applicationfees}</th>
                                <th>{scholar.servicecharge}</th>
                                <th>{scholar.status}</th>
                                <th><Link to={`/scholarship/${scholar.ScholarshipId}`}><button className="btn border-[#4F8EB6] text-[#FFFFFF] bg-[#4F8EB6] hover:bg-[#FFFFFF] hover:text-[#4F8EB6]"><BiSolidDetail className="size-8"/></button></Link></th>
                                <th><button className="btn btn-outline btn-accent"><FaPen className="size-6"/></button></th>
                                <th><button onClick={() => handleDelete(scholar)}  className="text-[#D2093C] text-center"><FaTimesCircle className="size-10"/></button></th>
                                <th><Link to={`/dashboard/myapplication/${scholar._id}`}><button className="text-[#D2093C] text-center">Review</button></Link></th>
                                <th></th>
                            </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyApplication;