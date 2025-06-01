import { Pencil } from "lucide-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const allUsers = useLoaderData();
  const [users, setUsers] = useState(allUsers || []);
  const handleDeleteUser = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/users/${userId}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = [...users].filter(
                (user) => user._id !== userId
              );
              setUsers(remaining);
              Swal.fire({
                title: "Deleted!",
                text: `User has been deleted.`,
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-2xl">Users</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users.map((user, i) => (
              <tr key={user?._id}>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.lastSignInTime}</td>
                <td className="space-x-1">
                  <button className="btn">
                    <Pencil className="h-6 w-6"></Pencil>
                  </button>
                  <button
                    className="btn"
                    onClick={() => handleDeleteUser(user?._id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
