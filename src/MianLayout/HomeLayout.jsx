import React from "react";
import Navber from "../component/Navber";
import { Outlet } from "react-router";
import Footer from "../component/Footer";

const HomeLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <header>
        <Navber></Navber>
      </header>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
