import { FaPen, FaTimesCircle } from "react-icons/fa";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


const MyReview = () => {
    const myreviews = useLoaderData();
    const { user } = useContext(AuthContext)
    const amyreviews = myreviews.filter(s => s.email === user.email)
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
                                <th>Scholarship Name</th>
                                <th>University Name</th>
                                <th>Review Comment</th>
                                <th>Review Date</th>
                                <th>Review Point</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                amyreviews.map((review, index) =>
                                    <tr className="hover  text-lg " key={review._id}>
                                <th>{index+1}</th>
                                <th>{review.scholarshipname}</th>
                                <th>{review.universityname}</th>
                                <th>{review.Reviewcomment}</th>
                                <th>{review.Reviewdate.slice(0,10)}</th>
                                <th>{review.Ratingpoint}</th>
                                <th><button className="btn btn-outline btn-accent"><FaPen className="size-6"/></button></th>
                                <th><button className="text-[#D2093C] text-center"><FaTimesCircle className="size-10"/></button></th>
                                {/* <th><button onClick={() => handleDelete(scholar)}  className="text-[#D2093C] text-center"><FaTimesCircle className="size-10"/></button></th> */}
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

export default MyReview;