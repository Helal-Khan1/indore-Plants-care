import { createBrowserRouter } from "react-router";
import HomeLayout from "../MianLayout/HomeLayout";
import Home from "../component/Home";
import Plants from "../Pages/Plants";
import MyProfile from "./MyProfile";
import AuthLayout from "../MianLayout/AuthLayout";
import Login from "../Pages/Login";
import PlantDetails from "../Pages/PlantDetails";
import Rgister from "../Pages/Rgister";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import UpdeteProfile from "../Pages/UpdeteProfile";
import Loeding from "../component/Loeding";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    hydrateFallbackElement: <Loeding></Loeding>,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loeding></Loeding>,
        loader: () => fetch("/plantsData.json"),
        element: <Home></Home>,
      },
      {
        path: "plants",
        hydrateFallbackElement: <Loeding></Loeding>,
        loader: () => fetch("/plantsData.json"),
        element: (
          <PrivetRouter>
            <Plants></Plants>
          </PrivetRouter>
        ),
      },
      {
        path: "PlantDetails/:id",
        hydrateFallbackElement: <Loeding></Loeding>,
        loader: () => fetch("/plantsData.json"),
        element: (
          <PrivetRouter>
            <PlantDetails></PlantDetails>
          </PrivetRouter>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivetRouter>
            <MyProfile></MyProfile>
          </PrivetRouter>
        ),
      },
      {
        path: "updetProfile",
        element: (
          <PrivetRouter>
            <UpdeteProfile></UpdeteProfile>
          </PrivetRouter>
        ),
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
        element: <Rgister></Rgister>,
      },
    ],
  },
]);
