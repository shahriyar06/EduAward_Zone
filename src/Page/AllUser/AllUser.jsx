import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";


const AllUser = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Photo</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) => <tr key={user._id}>
        <th>{index+1}</th>
        <td><img src={user.photo} className="w-14 h-14 rounded-xl" alt="" /></td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td className="btn">Details</td>
        <td>{user.email}</td>
      </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default AllUser;