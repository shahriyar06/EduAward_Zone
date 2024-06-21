

const ManageReview = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <div className="divider"></div>
                <h1 className="text-5xl font-semibold">Reviews</h1>
                <div className="divider"></div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="p-5">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="px-5 pb-5 space-y-3">
                    <h2 className="text-2xl">Reviewed University Name</h2>
                    <h1 className="text-lg">Subject Category</h1>
                    <h1 className="text-lg">Reviewer name</h1>
                    <div className="flex justify-between text-lg">
                        <h1>Review date</h1>
                        <h1>Rating point</h1>
                    </div>
                    <p>Reviewer Comments</p>
                    <div className="card-actions">
                        <button className="btn btn-primary text-lg">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageReview;