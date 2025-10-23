import React from "react";

const PlantCreat = () => {
  return (
    <div className="mt-28  container mx-auto">
      <h1 className="text-6xl font-bold  bebas-regular text-center ">
        Plant Care Tips
      </h1>

      <div className="mt-20 flex justify-center gap-5 ">
        <div>
          <img src="https://i.ibb.co.com/3m0SjyGS/images4.jpg" alt="" />
        </div>
        <div className="border-2"></div>
        <div className="w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          ducimus placeat ex saepe in voluptates aliquam magnam mollitia. Quia
          beatae cupiditate voluptas ipsam aspernatur et sequi eveniet, tenetur
          quos aperiam?
        </div>
      </div>

      <div className="mt-20">
        <h1 className="font-bold text-6xl bebas-regular text-center">
          Meet Our Green Experts
        </h1>

        <div className="grid md:grid-cols-3 mb-20 px-2 ">
          <div className=" border-green-600 rounded-2xl  shadow-2xl  sm:w-[400px] p-2 mt-20 border-2   gap-5">
            <div className="">
              <figure className="h-48 overflow-hidden">
                <img
                  src="https://i.ibb.co.com/HT938J7T/BM-Hilton-Carter-Portraits-6.jpg"
                  alt=""
                  className=" sm:w-full object-cover"
                />
              </figure>
              <h1 className="  font-bold">Name: Hilton Carter</h1>
            </div>
            <p className="text-2xl font-bold"> specialization</p>
            <p>
              <span className="font-bold">
                Plant Styling <br />
                Interior Design:
              </span>
              Hilton specializes in decorating and designing indoor spaces with
              plants. He teaches how to arrange plants beautifully in homes,
              making them part of interior design while ensuring they thrive.
            </p>
            <p>
              <span className="font-bold">Indoor Plant Care: </span>
              He’s an expert in keeping indoor plants healthy — giving the right
              amount of light, water, fertilizer, and repotting when needed
            </p>
          </div>
          <div className=" sm:w-[400px] border-green-600 rounded-2xl  shadow-2xl px-5 sm:p-2 mt-20 border-2 gap-5">
            <div className="">
              <figure className=" h-48 overflow-hidden ">
                <img
                  src="https://i.ibb.co.com/MxCF3Zyn/cd62b5ce-7b06-4b6c-8720-e71a3aa62803-Lisa-Eldred-Steinkopf.webp"
                  alt=""
                  className=" w-full object-cover"
                />
              </figure>
              <h1 className="  font-bold">Name: Lisa Eldred Steinkopf</h1>
            </div>
            <p className="text-2xl font-bold"> specialization</p>
            <p>
              <span className="font-bold">Indoor Houseplant Care: </span>
              Lisa specializes in caring for indoor houseplants — how to water,
              feed, prune, and troubleshoot common problems like yellow leaves,
              pests, or root rot.
            </p>
            <p>
              <span className="font-bold">
                Low-Light and Home Environments:
              </span>
              She teaches how to select and care for plants that can grow well
              even in low-light rooms or apartments, helping people match plants
              to their home conditions.
            </p>
          </div>
          <div className=" border-green-600 rounded-2xl  shadow-2xl p-4  sm:p-2 mt-20 border-2 gap-5">
            <div className="">
              <figure className=" h-48 overflow-hidden ">
                <img
                  src="https://i.ibb.co.com/FLfNTXWW/Profile02-fmt.png"
                  alt=""
                  className=" w-full object-cover"
                />
              </figure>
              <h1 className="  font-bold">Name: Darryl Cheng</h1>
            </div>
            <p className="text-2xl font-bold"> specialization</p>
            <p>
              <span className="font-bold">
                Plant Science & Light Understanding{" "}
              </span>
              Darryl is best known for teaching people to understand plant
              biology and light — instead of just following generic care rules.
              He explains why plants behave the way they do.
            </p>
            <p>
              <span className="font-bold">
                Houseplant Care (Logical Approach):
              </span>
              He developed a science-based, logical approach to plant care —
              helping people observe plant signals (leaf color, soil moisture,
              growth) and respond correctly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCreat;
