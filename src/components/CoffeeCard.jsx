import { EyeIcon, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthValue from "../hooks/useAuthValue";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, quantity, taste, photo, _id } = coffee || {};
  const { user } = useAuthValue();
  const handleDeleteCoffee = (coffeeId, coffeeName) => {
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
        fetch(`https://coffee-store-server-gamma-two.vercel.app/coffee/${coffeeId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = coffees.filter((c) => c._id !== coffeeId);
              setCoffees(remaining);
              Swal.fire({
                title: "Deleted!",
                text: `${coffeeName} has been deleted.`,
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow p-5 flex flex-col md:flex-row items-center gap-6">
      {/* Image */}

      <img
        src={photo}
        alt={name}
        className="w-32 h-40 object-cover rounded-lg shadow-md"
      />

      {/* Content */}
      <div className="flex-1 space-y-2">
        <p>
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>
        <p>
          <span className="font-semibold">Taste:</span> {taste}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <Link
          to={user ? `/showDetailCoffee/${_id}` : "/signup"}
          title="View"
          className="btn btn-sm bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700 rounded-full transition"
        >
          <EyeIcon size={16} />
        </Link>

        {user && user?.email && (
          <>
            <Link
              to={`/updateCoffee/${_id}`}
              title="Edit"
              className="btn btn-sm bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-600 rounded-full transition"
            >
              <Pencil size={16} />
            </Link>

            <button
              title="Delete"
              onClick={() => handleDeleteCoffee(_id, name)}
              className="btn btn-sm bg-red-600 hover:bg-red-700 text-white dark:bg-red-500 dark:hover:bg-red-600 rounded-full transition"
            >
              <Trash2 size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CoffeeCard;
