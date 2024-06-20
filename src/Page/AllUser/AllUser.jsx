import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUser = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleDelete = (user) => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${user.name} has been deleted.`,
                                icon: "success"
                            });
                            refetch();
                        }
                    });
            }
        });
    };

    const handleUserRole = (event, user) => {
        const role = event.target.value;
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`, { role })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: `${user.name}'s role has been updated to ${role}.`,
                                icon: "success"
                            });
                            refetch();
                        }
                    });
            }
        });
    };

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra text-lg">
                <thead>
                    <tr className="text-lg">
                        <th>#</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td><img src={user.photo} className="w-14 h-14 rounded-xl" alt="" /></td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.role === 'Admin' || user.role === 'Moderator' ? (
                                    <h1>{user.role}</h1>
                                ) : (
                                    <select 
                                        onChange={(event) => handleUserRole(event, user)}
                                        className="w-2/3 rounded-lg border-b-2 bg-transparent placeholder-[#080808]" 
                                        defaultValue=""
                                        required 
                                    >
                                        <option value="">Select Role</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Moderator">Moderator</option>
                                    </select>
                                )}
                            </td>
                            <td></td>
                            <td 
                                onClick={() => handleDelete(user)} 
                                className="btn btn-outline text-[#D2093C] hover:bg-[#D2093C]"
                            >
                                <FaTrash className="text-xl" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;
