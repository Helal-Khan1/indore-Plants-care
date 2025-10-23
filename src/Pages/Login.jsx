import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContex } from "../Provider/AuthContex";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { CiRead, CiUnread } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { singIn, user, SingWithGoogle } = use(AuthContex);
  const [open, setOpen] = useState(false);
  const emailRef = useRef();

  const location = useLocation();
  const Navigation = useNavigate();
  // console.log(location);

  const signgooglehandalar = () => {
    SingWithGoogle()
      .then(() => {
        toast("Login successful with Google");
        Navigation(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        toast(err.message);
      });
  };
  const forgethandalar = () => {
    const forgetemail = emailRef.current.value;
    if (!forgetemail) {
      toast("Please enter your email first!");
      return;
    }

    sendPasswordResetEmail(auth, forgetemail)
      .then(() => {
        toast("Password reset email sent! Check your inbox.");
      })
      .catch((err) => {
        toast(err.message);
      });
  };
  const submiteHandaler = (event) => {
    event.preventDefault();
    const emial = event.target.email.value;
    const password = event.target.password.value;
    // console.log({ emial, password });
    if (password.length < 6) {
      toast("must be at least 6 character");
      return;
    }
    singIn(emial, password)
      .then((result) => {
        // console.log(result.user);
        toast("login sucssfull");
        Navigation(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        // console.log(err);

        if (err.code == "auth/invalid-credential") {
          toast("Your email is not found try agein");
          // toast(err.code);
          return;
        }
      });
  };

  return (
    <div className=" min-h-screen flex items-center justify-center ">
      <div className="card bg-green-400 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-center text-4xl font-bold "> Login</h1>
          <form onSubmit={submiteHandaler}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <div>
                <input
                  ref={emailRef}
                  name="email"
                  type="email"
                  required
                  className="input bg-green-300 "
                  placeholder="Email"
                />
              </div>
              <label className="label">Password</label>
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
                    <CiUnread className=" absolute right-8 top-4" />
                  ) : (
                    <CiRead className=" absolute right-8 top-4" />
                  )}
                </button>
              </div>
              <div className="flex gap-15">
                <button type="button" onClick={forgethandalar}>
                  Forgot password?
                </button>
              </div>
              <button
                type="submit"
                className="btn bg-green-400 hover:bg-green-600 mt-4"
              >
                Login
              </button>
              <p className="text-center">
                No have an account?{" "}
                <span className="text-blue-700">
                  <Link to={"/register"}>Register</Link>
                </span>
              </p>
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
    </div>
  );
};

export default Login;
