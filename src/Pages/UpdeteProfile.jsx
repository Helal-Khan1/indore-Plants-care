import React, { use, useState } from "react";
import { AuthContex } from "../Provider/AuthContex";
import { toast } from "react-toastify";
import { auth } from "../Firebase/firebase.config";
import { Link, useNavigate } from "react-router";

const UpdeteProfile = () => {
  const navigate = useNavigate();

  const { user, updeteUser, setUser } = use(AuthContex);
  const onSubmithandalar = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    updeteUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...auth.currentUser, displayName: name, photoURL: photo });
        toast("Profile updated successfully!");
        navigate("/profile");
        return auth.currentUser.reload();
      })
      .then(() => {
        setUser(auth.currentUser);
      })

      .catch((err) => {
        // console.log(err.message);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="border-2 w-[350px] p-4">
        <h1 className=" font-bold text-center ">Update Profile</h1>
        <form onSubmit={onSubmithandalar}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            required
            name="name"
            className="w-full bg-white/30 p-1 rounded-sm"
            placeholder="Your Name"
          />
          <label htmlFor="Name">Photo Url</label>
          <input
            type="url"
            required
            name="photo"
            className="w-full bg-white/30 p-1 rounded-sm"
            placeholder="Photo URL"
          />

          <button className="btn bg-green-500 w-full mt-4">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdeteProfile;
