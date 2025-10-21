import React from "react";
import { useLoaderData } from "react-router";

const OurPlantsCard = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="mt-[100px] container mx-auto  ">
      <h1 className="text-5xl font-bold text-center bebas-regular text-black/60">
        Our Top Rated Indoor Plants
      </h1>

      <div className="grid  sm:grid-cols-4 pl-2 mt-12 space-y-2.5 ">
        {data.map((plant) => (
          <div className="border-2 border-green-500 hover:bg-green-400 hover:scale-105  space-y-2.5 transition  ease-in-out shadow-2xl rounded-sm w-[300px] h-auto p-4 ">
            <figure className="h-48 overflow-hidden">
              <img
                src={plant.image}
                alt=""
                className=" w-full  object-cover rounded-sm"
              />
            </figure>
            <div className=" flex  justify-between">
              <h1 className=" font-bold">Name: {plant.plantName} </h1>
              <span className="font-semibold">Rating:{plant.rating}</span>
            </div>
            <h3 className=" font-semibold">Price: ${plant.price}</h3>
            <button className="bg-green-700 w-full text-white font-bold p-1  rounded-sm">
              View detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPlantsCard;
