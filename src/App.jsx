import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees]= useState(loadedCoffees);

  return (
    <>
      <h2 className="text-center m-5 text-4xl font-semibold bg-[#ffffff09] text-rose-600 rounded-full p-2">
        {" "}
        COFFEES: {coffees.length}
      </h2>
      <div className="grid lg:grid-cols-2">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />
        ))}
      </div>

      <div className="mx-auto text-center w-36">
        <Link to="/addCoffee">
          <button className="btn">Add coffe</button>
        </Link>
      </div>
    </>
  );
}

export default App;
