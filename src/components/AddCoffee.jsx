  import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // Send Coffees data to the server
    fetch("https://coffee-store-server-gamma-two.vercel.app/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",

          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex  items-center justify-center px-4">
      <div className="max-w-2xl w-full border shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-primary">
          Add New Coffee
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Add your favorite coffee by filling out the form below. Make sure to
          include accurate details for better experience.
        </p>

        <form
          onSubmit={handleAddCoffee}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Coffee Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter coffee name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Coffee Quantity */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Quantity</span>
            </label>
            <input
              name="quantity"
              type="text"
              placeholder="Enter coffee quantity"
              className="input input-bordered w-full"
            />
          </div>

          {/* Supplier */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Supplier Name</span>
            </label>
            <input
              name="supplier"
              type="text"
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full"
            />
          </div>

          {/* Taste */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Taste</span>
            </label>
            <input
              name="taste"
              type="text"
              placeholder="Enter Taste"
              className="input input-bordered w-full"
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Category</span>
            </label>
            <input
              name="category"
              type="text"
              placeholder="Enter Category"
              className="input input-bordered w-full"
            />
          </div>

          {/* Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Details</span>
            </label>
            <input
              name="details"
              type="text"
              placeholder="Enter details"
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:col-span-2 form-control">
            <label className="label">
              <span className="label-text font-medium">Photo</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:col-span-2">
            <input
              type="submit"
              className="btn btn-primary w-full mt-4"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
