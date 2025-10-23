import React from "react";

import { motion } from "framer-motion"; // ✅ এই লাইনটি যোগ করো


      

const PlantCreat = () => {
  return (
    <div className="mt-28  container mx-auto">
      <h1 className="text-6xl font-bold  bebas-regular text-center ">
        Plant Care Tips
      </h1>

      <div className="mt-20 flex justify-center gap-5 ">
        <div className="space-y-20">
          <motion.img
            src="https://i.ibb.co.com/3m0SjyGS/images4.jpg"
            alt=""
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="https://i.ibb.co.com/jvZJy9ZT/Aloe-Vare3.jpg"
            className="h-60 mx-auto mt-5"
            alt=""
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="https://i.ibb.co.com/9xZ80pC/view-palm-tree-species-with-green-foliage.jpg"
            className="h-60 mx-auto mt-5"
            alt=""
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="https://i.ibb.co.com/BVGSxJMS/zz-plant5.webp"
            className="h-60 mx-auto mt-5"
            alt=""
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="border-2"></div>
        <div className="w-[300px]  space-y-2.5 pl-5 ">
          <h1 className=" text-2xl font-bold">
            How to Water Indoor or House Plants
          </h1>
          <li>
            {" "}
            <span className="font-bold ">Check the soil:</span>
            Stick your finger 1–2 inches into the soil. Water the plant if the
            soil feels dry. If the soil is still moist, do not water.
            Overwatering can cause root rot.
          </li>
          <li>
            {" "}
            <span className="font-bold ">Amount of water:</span>
            Water in a way that the soil gets soaked but water drains out from
            the holes at the bottom of the pot. Make sure excess water does not
            accumulate at the bottom of the pot after watering.
          </li>
          <li>
            {" "}
            <span className="font-bold ">Time to water:</span>
            Morning is the best time to water because the plant can absorb water
            through its roots during the day. Avoid watering too much in the
            afternoon or at night, as cold nighttime conditions can cause root
            rot.
          </li>
          <p></p>
          <h1 className="text-2xl font-bold">
            Sunlight Tips for Indoor Plants and Fertilizing Tips{" "}
          </h1>
          <li>
            <span className="font-bold ">
              Understand the plant’s light needs:
            </span>
            Low-light plants: Snake plant, ZZ plant, Pothos → indirect light or
            shade. Medium-light plants: Peace lily, Spider plant → bright,
            indirect light. High-light plants: Succulents, Fiddle leaf fig →
            direct sunlight or very bright indirect light.
          </li>
          <li>
            <span className="font-bold ">Placement:</span>
            Place near windows for natural light. East- or west-facing windows
            are ideal for most plants. Avoid harsh midday sun for delicate
            leaves; it can burn them.
          </li>
          <li>
            <span className="font-bold ">Use the right fertilizer</span>
            Balanced, water-soluble fertilizer (e.g., NPK 10:10:10) works well
            for most indoor plants. Some plants like succulents need specialized
            low-nitrogen fertilizer.
          </li>
          <li>
            <span className="font-bold ">Frequency:</span>
            During the growing season (spring and summer): Fertilize every 4–6
            weeks. Dormant season (fall and winter): Reduce or stop fertilizing
            because the plant grows slowly.
          </li>
          <li>
            <span className="font-bold ">Application:</span>
            Dilute fertilizer to half the recommended strength to avoid root
            burn. Water the plant before fertilizing to prevent fertilizer from
            damaging roots.
          </li>
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
