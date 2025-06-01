import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthValue from "../hooks/useAuthValue";

const ShowDetailCoffee = () => {
  const coffee = useLoaderData() || {};
  const navigate = useNavigate();
  const {user} =  useAuthValue()  
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleOrder = (name, photo) => {
    const orderInfo = { name, photo , userName: user?.displayName, email: user?.email};
    fetch(`https://coffee-store-server-gamma-two.vercel.app/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Coffee Ordered Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };

  return (
    <section className=" dark:bg-base-200 py-10 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-base-100 shadow-xl rounded-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Image */}
        <div className="relative">
          <img src={photo} alt={name} className="h-full w-full object-cover" />
          <button
            onClick={() => handleOrder(name, photo)}
            className="absolute top-6 overflow-visible -rotate-45 btn"
          >
            Order Now
          </button>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 p-6 lg:p-10 space-y-4">
          <h2 className="text-3xl font-bold text-primary">{name}</h2>
          <p className="text-gray-500 mb-2">{details}</p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">Category:</span>
              <p>{category}</p>
            </div>
            <div>
              <span className="font-semibold">Supplier:</span>
              <p>{supplier}</p>
            </div>
            <div>
              <span className="font-semibold">Quantity:</span>
              <p>{quantity}</p>
            </div>
            <div>
              <span className="font-semibold">Taste:</span>
              <p>{taste}</p>
            </div>
          </div>

          <div className="pt-4">
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              ← Back to List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowDetailCoffee;
