import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";


const ManageReview = () => {

    const axiosPublic = useAxiosPublic();
    const { data: myreviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews');
            return res.data;
        }
    });

    const handleDelete = (reviews) => {
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
                axiosPublic.delete(`/reviews/${reviews._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${reviews.name} review has been deleted.`,
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
                <h1 className="text-5xl font-semibold">Reviews</h1>
                <div className="divider"></div>
            </div>
            <div className="grid grid-cols-3 gap-3 w-11/12 mx-auto">
                {
                    myreviews.map(reviews => <div className="card w-[400px] bg-base-100 shadow-xl" key={reviews._id}>
                        <figure className="p-5">
                            <img src={reviews.Reviewerphoto} alt="Shoes" className="rounded-xl h-96 w-full" />
                        </figure>
                        <div className="px-5 pb-5 space-y-3">
                            <h2 className="text-2xl">{reviews.universityname}</h2>
                            <h1 className="text-lg">{reviews.scholarshipname}</h1>
                            <h1 className="text-lg">{reviews.name}</h1>
                            <div className="flex justify-between text-lg">
                                <h1>{reviews.Reviewdate.slice(0,10)}</h1>
                                <h1>{reviews.Ratingpoint}</h1>
                            </div>
                            <p>{reviews.Reviewcomment}</p>
                            <div className="card-actions">
                                <button onClick={() => handleDelete(reviews)}  className="btn btn-primary text-lg">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageReview;