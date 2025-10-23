import React, { use } from "react";
import { AuthContex } from "../Provider/AuthContex";
import { Navigate, useLocation } from "react-router";
import Loeding from "../component/Loeding";

const RrivetRouter = ({ children }) => {
  const { user, loding } = use(AuthContex);
  const location = useLocation();
  console.log(location);
  if (loding) {
    return <Loeding></Loeding>;
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default RrivetRouter;
