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
        <h1 className="font-bold text-5xl text-center">
          Meet Our Green Experts
        </h1>

        <div className="flex items-center gap-5">
          <div className="">
            <img
              src="https://i.ibb.co.com/1YvQ6gD0/images10.jpghttps://i.ibb.co.com/HT938J7T/BM-Hilton-Carter-Portraits-6.jpg"
              alt=""
            />
            <h1>Hilton Carter</h1>
          </div>
          <div>
            <h1>specialization</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              libero ratione obcaecati numquam magnam, facilis modi earum
              quidem, nihil quasi veniam iusto? Illo saepe autem blanditiis, id
              magnam ullam ducimus.
            </p>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co.com/zHn4WDsk/1519003030121.jpg" alt="" />
          <h1>Lisa Eldred Steinkopf</h1>
        </div>
        <div>
          <img src="https://i.ibb.co.com/FLfNTXWW/Profile02-fmt.png" alt="" />
          <h1>Darryl Cheng</h1>
        </div>
      </div>
    </div>
  );
};

export default PlantCreat;
