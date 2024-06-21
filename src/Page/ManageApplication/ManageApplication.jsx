

const ManageApplication = () => {
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                scholarships.map((scholar, index) =>
                                    <tr className="hover  text-lg " key={scholar._id}>
                                <th>{index+1}</th>
                                <th>{scholar.scholarshipname}</th>
                                <th>{scholar.universityname}</th>
                                <th>{scholar.subjectcategory}</th>
                                <th>{scholar.degree}</th>
                                <th>{scholar.applicationfees}</th>
                                <th><button className="btn border-[#4F8EB6] text-[#FFFFFF] bg-[#4F8EB6] hover:bg-[#FFFFFF] hover:text-[#4F8EB6]"><BiSolidDetail className="size-8"/></button></th>
                                <th><button className="btn btn-outline btn-accent"><FaPen className="size-6"/></button></th>
                                <th><button onClick={() => handleDelete(scholar)}  className="text-[#D2093C] text-center"><FaTimesCircle className="size-10"/></button></th>
                            </tr>
                                )
                            } */}
                            <th> Scholarship Name</th>
                            <th>University Name</th>
                            <th>Subject Category</th>
                            <th>Applied Degree</th>
                            <th>Application Fees</th>
                            <th>Details</th>
                            <th>Details</th>
                            <th>Details</th>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageApplication;