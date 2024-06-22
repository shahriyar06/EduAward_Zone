import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { BiSolidDetail } from "react-icons/bi";
import { FaPen } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageApplication = () => {
    const axiosPublic = useAxiosPublic();
    const { data: applications = [], refetch } = useQuery({
        queryKey: ['applications'],
        queryFn: async () => {
            const res = await axiosPublic.get('/applications');
            return res.data;
        }
    });

    const handleStatus = (event, apply) => {
        const status = event.target.value;
        Swal.fire({
            title: "Are you sure?",
            text: "Update It?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.post(`/applications/${apply._id}`, { status })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: `${apply.name}'s application has been updated to ${status}.`,
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
                <h1 className="text-5xl font-semibold">Applied Application</h1>
                <div className="divider"></div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead>
                            <tr className=" text-lg ">
                                <th>University Name</th>
                                <th>Scholarship Name</th>
                                <th>Scholarship Category</th>
                                <th>Subject Category</th>
                                <th>Applied Degree</th>
                                <th>Application Fees</th>
                                <th>Service Charge</th>
                                <th>Application Status</th>
                                <th>Details</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                applications.map((apply) =>
                                    <tr className="hover  text-lg " key={apply._id}>
                                        <th>{apply.universityname}</th>
                                        <th>{apply.scholarshipname}</th>
                                        <th>{apply.Scholarshipcategory}</th>
                                        <th>{apply.subjectcategory}</th>
                                        <th>{apply.degree}</th>
                                        <th>{apply.applicationfees}</th>
                                        <th>{apply.servicecharge}</th>
                                        <th>
                                            <select
                                                onChange={(event) => handleStatus(event, apply)}
                                                className=" rounded-lg border-b-2 bg-transparent placeholder-[#080808]"
                                                defaultValue=""
                                                required
                                            >
                                                <option value="">{apply.status}</option>
                                                <option value="Processing">Processing</option>
                                                <option value="Processing">completed</option>
                                                <option value="Rejected">Rejected</option>
                                            </select>
                                        </th>
                                        <th><button className="btn border-[#4F8EB6] text-[#FFFFFF] bg-[#4F8EB6] hover:bg-[#FFFFFF] hover:text-[#4F8EB6]"><BiSolidDetail className="size-8" /></button></th>
                                        <th><button className="btn btn-outline btn-accent"><FaPen className="size-6" /></button></th>
                                        {/* <th><button onClick={() => handleDelete(scholar)} className="text-[#D2093C] text-center"><FaTimesCircle className="size-10" /></button></th> */}
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

export default ManageApplication;