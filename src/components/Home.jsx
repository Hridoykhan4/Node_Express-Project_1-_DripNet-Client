import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const allCoffees = useLoaderData() || [];
  const [coffees, setCoffees] = useState(allCoffees);
  return (
      <section className="grid py-6 sm:grid-cols-2 grid-cols-1 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee?._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </section>
  );
};

export default Home;
