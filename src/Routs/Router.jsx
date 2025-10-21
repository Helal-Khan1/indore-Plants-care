import { createBrowserRouter } from "react-router";
import HomeLayout from "../MianLayout/HomeLayout";
import Home from "../component/Home";
import Plants from "../Pages/Plants";
import MyProfile from "./MyProfile";
import AuthLayout from "../MianLayout/AuthLayout";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("/plantsData.json"),
        element: <Home></Home>,
      },
      {
        path: "plants",
        element: <Plants></Plants>,
      },
      {
        path: "profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Login></Login>,
      },
    ],
  },
]);
