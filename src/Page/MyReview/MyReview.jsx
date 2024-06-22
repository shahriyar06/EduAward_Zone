import { FaPen, FaTimesCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";


const MyReview = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext)
    const { data: myreviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews');
            return res.data;
        }
    });
    const amyreviews = myreviews.filter(s => s.email === user.email);

    const handleDelete = (review) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(review._id)
            if (result.isConfirmed) {
                axiosPublic.delete(`/reviews/${review._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${review.scholarshipname} has been deleted.`,
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
                <h1 className="text-5xl font-semibold">My Review</h1>
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
                                <th><button onClick={() => handleDelete(review)}  className="text-[#D2093C] text-center"><FaTimesCircle className="size-10"/></button></th>
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