import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContex } from "../Provider/AuthContex";

const Navber = () => {
  const { loding, user, singOut, setLoding } = use(AuthContex);
  console.log(user);

  const sineouthandalar = () => {
    setLoding(true);
    singOut();
  };
  console.log(loding);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/plants"}>Plants</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-green-400 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-green-400 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={sineouthandalar} className="btn">
              log out
            </button>
          ) : (
            <NavLink to={"/login"}>
              <button className="btn">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
