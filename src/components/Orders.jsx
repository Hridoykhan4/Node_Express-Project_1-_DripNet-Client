import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const allOrders = useLoaderData();

  return (
    <div className=" bg-[#FDF9F4] dark:bg-[#1f1f1f] px-6 py-10 font-[FiraCode]">
      <h2 className="text-3xl pb-5 font-bold text-[#5E3023] dark:text-[#e0c6b3] mb-8 text-center">
        ☕ Your Orders
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {allOrders.map((order) => (
          <div
            key={order._id}
            className="bg-white dark:bg-[#2e2e2e] shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={order.photo}
              alt={order.name}
              className="w-24 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#8B4513] dark:text-[#D2996E]">
                {order.name}
              </h3>
              <p className="text-sm text-[#6B4F4F] dark:text-[#ccc] mt-2">
                Ordered by:{" "}
                <span className="font-medium">{order.userName}</span>
              </p>
              <p className="text-sm text-[#6B4F4F] dark:text-[#bbb]">
                Email: <span className="font-mono">{order.email}</span>
              </p>

            

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
