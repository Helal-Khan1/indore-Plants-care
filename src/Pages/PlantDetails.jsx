import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const PlantDetails = () => {
  const submiteHandaler = (event) => {
    event.preventDefault();
    toast(" hi Ima helal");
  };
  const [plant, setPlant] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    const filterDAta = data.find((plant) => plant.plantId == id);
    setPlant(filterDAta);
  }, [id, data]);
  return (
    <div className=" mt-20 container mx-auto flex  items-center  justify-center">
      <div>
        <div className="w-[700px]  border-green-500 shadow-sm rounded-sm border-2 p-4">
          <div>
            <img
              src={plant.image}
              className="w-full object-cover rounded-2xl h-[300px]"
              alt=""
            />
            <h1 className="font-bold">
              Name: <span className=" font-bold">{plant.plantName}</span>
            </h1>
            <p className="">
              <span className="text-1xl font-bold">Description:</span>{" "}
              {plant.description}
            </p>
            <div className=" border-1 border-green-500 shadow-2xl mt-4"></div>
            <div>
              <p>
                <span className="font-bold"> Price :</span> ${plant.price}
              </p>
              <p>
                <span className="font-bold">Rating </span>: ${plant.rating}
              </p>
              <p>
                <span className="font-bold">Strock</span> : $
                {plant.availableStock}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-15  flex items-center justify-center">
          <div>
            <h1 className=" font-bold text-5xl  text-center bebas-regular">
              Book Consultation
            </h1>
            <div className="border-2 border-green-600 mt-5 rounded-sm shadow-2xl mb-5 hover:bg-green-400 w-[400px] ">
              <form onSubmit={submiteHandaler} className="p-5 space-y-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter-your Name"
                  className="w-full  bg-green-200 p-1  focus:outline-none focus:ring-2 focus:ring-green-600 rounded-sm placeholder:text-black/30"
                />
                <label htmlFor="Name">Email</label>
                <input
                  type="email"
                  placeholder="Enter-your Email"
                  required
                  className="w-full  bg-green-200 p-1 focus:outline-none focus:ring-2 focus:ring-green-600  foucs: outline-none rounded-sm placeholder:text-black/30"
                />

                <button className="bg-green-500 w-full p-1 text-white font-bold hover:bg-green-600  rounded-sm ">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
<ToastContainer />;
export default PlantDetails;
