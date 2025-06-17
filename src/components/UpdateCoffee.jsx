import { useLoaderData } from "react-router-dom";
import {
  Coffee,
  Pencil,
  ImageIcon,
  Info,
  PackageSearch,
  Soup,
  Truck,
} from "lucide-react";
import Swal from "sweetalert2";
const UpdateCoffee = () => {
  const matchedCoffee = useLoaderData();

  const { name, quantity, supplier, taste, category, details, photo } =
    matchedCoffee || {};

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch(`http://localhost:5000
/coffee/${matchedCoffee?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
         if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-base-200 py-10 px-4 md:px-16 min-h-screen">
        <div className="max-w-4xl mx-auto  shadow-lg rounded-xl p-10 space-y-6 border border-gray-200">
          {/* Heading */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 flex justify-center items-center gap-2">
              <Pencil className="w-7 h-7 text-amber-700" />
              Update {name} Coffee
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleUpdateCoffee}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="label font-semibold flex items-center gap-2">
                <Pencil className="w-4 h-4" />
                Name
              </label>
              <input
                name="name"
                type="text"
                defaultValue={name}
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="label font-semibold flex items-center gap-2">
                <PackageSearch className="w-4 h-4" />
                Quantity
              </label>
              <input
                name="quantity"
                defaultValue={quantity}
                type="number"
                placeholder="Enter quantity"
                className="input input-bordered w-full"
              />
            </div>

            {/* Supplier */}
            <div>
              <label className="label font-semibold flex items-center gap-2">
                <Truck className="w-4 h-4" />
                Supplier
              </label>
              <input
                defaultValue={supplier}
                name="supplier"
                type="text"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </div>

            {/* Taste */}
            <div>
              <label className="label font-semibold flex items-center gap-2">
                <Soup className="w-4 h-4" />
                Taste
              </label>
              <input
                defaultValue={taste}
                name="taste"
                type="text"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </div>

            {/* Category */}
            <div>
              <label className="label font-semibold flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                Category
              </label>
              <input
                name="category"
                defaultValue={category}
                type="text"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </div>

            {/* Details */}
            <div className="md:col-span-2">
              <label className="label font-semibold flex items-center gap-2">
                <Info className="w-4 h-4" />
                Details
              </label>
              <textarea
                defaultValue={details}
                name="details"
                placeholder="Enter detailed description"
                className="textarea textarea-bordered w-full h-28"
              />
            </div>

            {/* Photo URL */}
            <div className="md:col-span-2">
              <label className="label font-semibold flex items-center gap-2">
                <ImageIcon className="w-4 h-4" />
                Photo URL
              </label>
              <input
                name="photo"
                defaultValue={photo}
                type="text"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-2 rounded-md shadow-md"
              >
                Update Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
