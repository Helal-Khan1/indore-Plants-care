import React from "react";
import { Link, useLoaderData } from "react-router";

const OurPlantsCard = () => {
  const data = useLoaderData();

  const sliceData = data.slice(0, 6);

  return (
    <div className="mt-[100px] container mx-auto  ">
      <h1 className="text-5xl font-bold text-center bebas-regular text-black/60">
        Our Top Rated Indoor Plants
      </h1>

      <div className="grid w-[1140px]   sm:grid-cols-3 pl-40 mt-12 space-y-2.5 ">
        {sliceData.map((plant) => (
          <div className="border-2 border-green-500 hover:bg-green-400 hover:scale-105  space-y-2.transition  ease-in-out shadow-2xl rounded-sm w-[300px] h-auto p-4 ">
            <figure className="h-48 overflow-hidden">
              <img
                src={plant.image}
                alt=""
                className=" w-full  object-cover rounded-sm"
              />
            </figure>
            <div className="  justify-between">
              <h1 className=" font-bold">Name: {plant.plantName} </h1>
              <span className="font-semibold">Rating:{plant.rating}</span>
            </div>
            <h3 className=" font-semibold">Price: ${plant.price}</h3>
            <Link to={`/PlantDetails/${plant.plantId}`}>
              <button className="bg-green-700 w-full text-white font-bold p-1  rounded-sm">
                View detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPlantsCard;
