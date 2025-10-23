import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContex } from "../Provider/AuthContex";
import { toast } from "react-toastify";
import { CiRead, CiUnread } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";

const Rgister = () => {
  const Navigation = useNavigate();
  const { createUser, updeteUser, setUser, SingWithGoogle } = use(AuthContex);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const signgooglehandalar = () => {
    SingWithGoogle()
      .then(() => {
        toast("Login successful with Google");
        Navigation(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        // console.log(err);
        toast(err.message);
      });
  };

  const submiteHandaler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const emial = event.target.email.value;
    const password = event.target.password.value;

    if (name.length < 4) {
      toast("name mast be 4 carackter");
      return;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!passwordRegex.test(password)) {
      toast(`Password must contain at least one special character `);

      return;
    } else {
      // toast("");
    }
    // console.log({ emial, password, name, photo });
    // event.target.reset();
    createUser(emial, password)
      .then((result) => {
        const user = result.user;
        // console.log(result);
        updeteUser({ displayName: name, photoURL: photo })
          .then(() => {
            toast("regisrer submit seccssuful ");
            setUser({ ...user, displayName: name, photoURL: photo });
            Navigation(`${location.state ? location.state : "/"}`);
          })
          .catch((err) => {
            // console.log(err);
            toast(err.message);
            setUser(user);
          });
      })
      .catch((err) => {
        if (err.code == "auth/email-already-in-use") {
          toast("Your Email is Already in used");
        }
        // toast(err.code);
        // console.log(err);
      });
  };
  return (
    <div className=" min-h-screen flex items-center justify-center ">
      <div className="card bg-green-400 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-center font-bold text-2xl">Ragister Now</h1>
          <form onSubmit={submiteHandaler}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input bg-green-300"
                placeholder="Enter your Name"
              />
              <label className="label">PhotUrl</label>
              <input
                name="photo"
                type="url"
                required
                className="input bg-green-300"
                placeholder="photo URL"
              />
              {/* email input filt */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                required
                className="input bg-green-300"
                placeholder="Email"
              />
              {/* password input fild */}
              <label className="label">password</label>
              <div className=" relative">
                <input
                  name="password"
                  type={open ? "password" : "text"}
                  required
                  className="input bg-green-300"
                  placeholder="Password"
                />
                <button type="button" onClick={() => setOpen(!open)}>
                  {open ? (
                    <CiRead className=" absolute right-8 top-4" />
                  ) : (
                    <CiUnread className=" absolute right-8 top-4" />
                  )}
                </button>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <span className="text-blue-700">
                    <Link to={"/login"}>login</Link>
                  </span>
                </p>
              </div>
              <button type="submit" className="btn bg-green-500 mt-4">
                Register
              </button>
            </fieldset>
          </form>
          <button
            onClick={signgooglehandalar}
            className="btn bg-green-400 hover:bg-green-600"
          >
            <FcGoogle className=" size-6" /> Sing in with google
          </button>
        </div>
      </div>
      <button></button>
    </div>
  );
};

export default Rgister;
