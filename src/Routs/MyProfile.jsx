import React, { use } from "react";
import { AuthContex } from "../Provider/AuthContex";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = use(AuthContex);
  return (
    <div className="flex items-centere  justify-center">
      <div className=" sm:w-[300px] p-2 border-green-600 mt-10 mb-15 rounded-sm border-2">
        <p>
          <img
            src={user?.photoURL}
            className=" rounded-sm  h-53 mx-auto"
            alt=""
          />
        </p>
        <p className=" font-bold "> Name: {user?.displayName}</p>
        <p> Email:{user?.email}</p>

        <Link to={"/updetProfile"}>
          <button className="btn w-full bg-green-500">Update Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
