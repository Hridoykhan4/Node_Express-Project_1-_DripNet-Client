import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const allCoffees = useLoaderData() || [];
  const [coffees, setCoffees] = useState(allCoffees);

  return (
    <>
      <h2 className="text-5xl text-purple-600 my-4 text-center">DisCoffee</h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee?._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
