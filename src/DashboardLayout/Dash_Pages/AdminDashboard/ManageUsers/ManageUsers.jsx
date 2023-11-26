import Swal from "sweetalert2";
import useAllUsers from "../../../../hooks/useAllUsers";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const ManageUsers = () => {
    const [allUsers, refetch] = useAllUsers()
    const axiosSecure = useAxiosSecure()
    console.log(allUsers)

    const handleMakeAdmin = oneUser => {
        axiosSecure.patch(`/users/admin/${oneUser._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${oneUser.name} is Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }



    return (
        <div className="ml-[300px]">
            <div className="overflow-x-auto">
                <table className="table-md">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Make Admin</th>
                            <th>Make Agent</th>
                            <th>Make Fraud</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allUsers.map((oneUser, index) => (
                                <tr key={oneUser._id}>
                                    <th>{index + 1}</th>
                                    <td>{oneUser.name}</td>
                                    <td>{oneUser.email}</td>
                                    <td className="text-center">
                                        {
                                            oneUser.role === 'admin' ? 'Admin'
                                                :
                                                <button
                                                    onClick={() => handleMakeAdmin(oneUser)}
                                                    className="btn"
                                                >
                                                    Make Admin
                                                </button>
                                        }
                                    </td>
                                    <td className="text-center">
                                        <button className="btn">Agent</button>
                                    </td>
                                    <td className="text-center">
                                        <button className="btn">Fraud</button>
                                    </td>
                                    <td className="text-center">
                                        <button
                                            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>

                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }

                        {/* row 2 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;