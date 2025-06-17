import { useLoaderData } from "react-router-dom";
import useAuthValue from "../hooks/useAuthValue";

const UpdateProfileName = () => {
  const user = useLoaderData();
  const { name, email } = user || {};
  const { updateUserProfile } = useAuthValue();
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedName = e.target.name.value;

    if (updatedName === user?.name) {
      return alert("Name is same,No Update!!!");
    }
    const updatedInfo = {
      name: updatedName,
      email,
    };

    if (updatedName.length < 4) {
      return alert(`Name must be at least 4 character`);
    }
    updateUserProfile(updatedName)
      .then(() => {
        fetch(`http://localhost:5000
/users/${user?._id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              alert(`Successfully Updated Name`);
            } else {
              alert(`Sorry!!Not Possible Right Now`);
            }
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-900 shadow-lg rounded-2xl p-6 text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Update Profile
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name
          </label>
          <input
            defaultValue={name}
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email (read-only)
          </label>
          <input
            value={email}
            type="email"
            id="email"
            name="email"
            readOnly
            className="mt-1 block w-full px-4 py-2 border border-gray-700 bg-gray-800 text-gray-400 rounded-lg cursor-not-allowed"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileName;
