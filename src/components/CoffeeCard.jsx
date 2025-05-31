import { EyeIcon, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, quantity, taste, photo, _id } = coffee || {};

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
        fetch(`http://localhost:5000/coffee/${coffeeId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = [...coffees].filter(
                (coffee) => coffee._id !== coffeeId
              );
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
    <div className=" rounded-xl shadow-md p-5 flex flex-col md:flex-row items-center gap-6  mx-auto">
      {/* Image */}
      <img
        src={photo}
        alt={name}
        className="w-32 h-40 object-cover rounded-lg shadow-md"
      />

      {/* Content */}
      <div className="flex-1 space-y-2 ">
        <p>
          <span className="font-semibold">Name :</span> {name}
        </p>
        <p>
          <span className="font-semibold">Quantity :</span> {quantity}
        </p>
        <p>
          <span className="font-semibold">Taste :</span> {taste}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <button className="btn btn-sm bg-blue-900 rounded-full">
          <EyeIcon size={16} />
        </button>
        <Link
          to={`/updateCoffee/${_id}`}
          className="btn btn-sm bg-black-500 hover:bg-fuchsia-600 text-white rounded-full"
        >
          <Pencil size={16} />
        </Link>
        <button
          onClick={() => handleDeleteCoffee(_id, coffee?.name)}
          className="btn btn-sm bg-red-500 hover:bg-fuchsia-600 text-white rounded-full"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
